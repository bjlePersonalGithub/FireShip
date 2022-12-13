import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
export default function Navbar() {
    const { user, username } = useContext(UserContext);
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href="/">
                        <button className='btn-logo'>FEED</button>
                    </Link>
                </li>
                {/* Shows when the user is signed in and has a username */}
                {username && (
                    <>
                        <li>
                            <Link href="/admin">
                                <button className='btn-blue'>Write a Post</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/${username}'}>
                                <img src={user?.photoURL}/>
                            </Link>
                        </li>
                    </>
                )}

                {!username && (
                    <Link href="enter">
                        <button className='btn-blue'>Log In</button>
                    </Link>
                )}

            </ul>
        </nav>
    );
}