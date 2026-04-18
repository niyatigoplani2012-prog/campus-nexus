// Shared frontend utilities — Campus Nexus

const checkAuth = async () => {
    try {
        const res = await fetch('/api/me');
        if (!res.ok) { window.location.href = '/login.html'; return null; }
        return await res.json();
    } catch { window.location.href = '/login.html'; return null; }
};

const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/index.html';
};

const loadCommonNavbar = () => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const currentPath = window.location.pathname;
    fetch('/api/me')
        .then(r => r.json())
        .then(user => {
            if (!user?.id) throw new Error();
            nav.innerHTML = `
                <a href="/index.html" class="nav-brand">🎓 Campus Nexus</a>
                <ul class="nav-links">
                    <li><a href="/dashboard.html" ${currentPath.includes('dashboard') ? 'class="active"' : ''}>Dashboard</a></li>
                    <li class="dropdown">
                        <a href="#">Explore ▾</a>
                        <div class="dropdown-content">
                            <a href="/projects.html">🔬 Projects</a>
                            <a href="/applications.html">📋 Applications</a>
                            <a href="/events.html">📅 Events</a>
                            <a href="/messages.html">💬 Messages</a>
                            <a href="/management.html">🏗️ My Management</a>
                        </div>
                    </li>
                    <li><a href="/profile.html" ${currentPath.includes('profile') ? 'class="active"' : ''}>👤 ${user.name.split(' ')[0]}</a></li>
                    <li><a href="#" onclick="logout();return false;" style="color:var(--accent-rose);">Sign Out</a></li>
                </ul>`;
        })
        .catch(() => {
            nav.innerHTML = `
                <a href="/index.html" class="nav-brand">🎓 Campus Nexus</a>
                <ul class="nav-links">
                    <li><a href="/index.html" ${currentPath === '/' || currentPath.includes('index') ? 'class="active"' : ''}>Home</a></li>
                    <li><a href="/about.html" ${currentPath.includes('about') ? 'class="active"' : ''}>About</a></li>
                    <li><a href="/login.html">Sign In</a></li>
                    <li><a href="/register.html" class="btn btn-primary btn-sm">Get Started</a></li>
                </ul>`;
        });
};

function showMessage(id, msg, isError = false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg;
    el.style.color = isError ? 'var(--accent-rose)' : 'var(--accent-teal)';
    el.style.fontWeight = '600';
    setTimeout(() => { el.textContent = ''; }, 4000);
}

// Tab switching utility
function switchTab(tabGroupId, tabName) {
    document.querySelectorAll(`[data-tab-group="${tabGroupId}"] .tab-btn`).forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll(`[data-tab-content="${tabGroupId}"]`).forEach(panel => {
        panel.classList.toggle('active', panel.dataset.tab === tabName);
    });
}

document.addEventListener('DOMContentLoaded', loadCommonNavbar);
