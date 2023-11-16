import React from 'react';
import './NavBar.css';
import logo from './gym_buddy_logo.png'
function NavBar() {
  return (
    <div style={{ width: '100%', height: '100%', paddingLeft: 36, paddingRight: 36, paddingTop: 32, paddingBottom: 32, background: '#4CC5E8', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
      <div style={{ flex: '1 1 0', height: 64, position: 'relative' }}>
        <img style={{ width: 202, height: 40.75, left: 0, top: 8, position: 'absolute' }} src={logo} alt="Logo" />
      </div>
      <div style={{ width: 177, height: 64, left: 1191, top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'flex' }}>
          <div style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Features</div>
          </div>
          <div style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>About Us </div>
          </div>
          <div style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Contact</div>
          </div>
          <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 20, border: '1px white solid', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Download ✨</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;


