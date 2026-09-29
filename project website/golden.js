const axios = require('axios');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3000/api';
const outputDir = path.join('C:\\tmp', 'golden');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let sessionCookie = '';

async function request(method, url, data = null) {
    try {
        const response = await axios({
            method,
            url: baseUrl + url,
            data,
            headers: {
                Cookie: sessionCookie,
            },
            validateStatus: () => true // don't throw on error statuses
        });
        
        const setCookie = response.headers['set-cookie'];
        if (setCookie) {
            sessionCookie = setCookie.map(c => c.split(';')[0]).join('; ');
        }
        
        return {
            status: response.status,
            body: response.data
        };
    } catch (err) {
        return { error: err.message };
    }
}

function save(name, result) {
    fs.writeFileSync(path.join(outputDir, name + '.json'), JSON.stringify(result, null, 2));
    console.log(`Saved ${name}.json`);
}

async function run() {
    // 1. Unauthenticated flows
    save('unauth_me', await request('get', '/me'));
    save('unauth_projects', await request('get', '/projects'));
    save('unauth_notes', await request('get', '/notes'));
    
    // 2. Register
    const email = `test${Date.now()}@test.com`;
    save('register_success', await request('post', '/register', { name: 'Test User', email, password: 'password123' }));
    save('register_duplicate', await request('post', '/register', { name: 'Test User 2', email, password: 'password123' }));
    
    // 3. Login
    save('login_success', await request('post', '/login', { email, password: 'password123' }));
    save('login_fail', await request('post', '/login', { email, password: 'wrong' }));
    
    // 4. Authenticated basic fetches
    save('auth_me', await request('get', '/me'));
    save('users', await request('get', '/users'));
    
    // Profile Update
    save('update_profile', await request('put', '/users/profile', { bio: 'New bio', skills: 'Node, React', department: 'CS', year: 3 }));
    save('auth_me_updated', await request('get', '/me'));
    
    // 5. Projects
    const p1 = await request('post', '/projects', { title: 'Proj 1', description: 'Desc', team_size: 2 });
    save('projects_create', p1);
    save('projects_list', await request('get', '/projects'));
    
    // 6. Applications
    if (p1.body.projectId) {
        save('applications_create', await request('post', '/applications', { project_id: p1.body.projectId, message: 'I am interested' }));
        save('applications_duplicate', await request('post', '/applications', { project_id: p1.body.projectId, message: 'Duplicate' }));
        save('applications_sent', await request('get', '/applications/sent'));
        save('applications_received', await request('get', '/applications/received'));
    }
    
    // 7. Events
    const e1 = await request('post', '/events', { title: 'Event 1', description: 'Desc', event_date: '2025-10-10', location: 'Lab' });
    save('events_create', e1);
    save('events_list', await request('get', '/events'));
    
    if (e1.body.eventId) {
        save('events_register', await request('post', `/events/${e1.body.eventId}/register`));
        save('events_register_duplicate', await request('post', `/events/${e1.body.eventId}/register`));
    }
    
    // 8. Management Stats
    save('management_stats', await request('get', '/management/stats'));

    // 9. Notes
    const n1 = await request('post', '/notes', { subject: 'Math', department: 'Maths', semester: '1', faculty_name: 'Dr. Smith' });
    save('notes_create', n1);
    save('notes_list_all', await request('get', '/notes'));
    if (n1.body.noteId) {
        save('notes_bookmark', await request('post', `/notes/${n1.body.noteId}/bookmark`));
        save('notes_download', await request('post', `/notes/${n1.body.noteId}/download`));
    }

    console.log('Golden samples generated in C:\\tmp\\golden');
}

run();
