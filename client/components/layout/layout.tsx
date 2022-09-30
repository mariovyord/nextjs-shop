import React from 'react';
import Header from '../header/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id='top' className='bg-base text-base-content w-full overflow-clip'>
            <Header />
            <main className='max-w-screen-2xl mx-auto p-4 bg-base-100'>
                {children}
            </main>
        </div>
    )
}

export default Layout;