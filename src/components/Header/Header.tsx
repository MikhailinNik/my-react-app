import styles from './Header.module.scss'

function Header() {
	return (
		<nav className={styles.root}>
			<h2>Home</h2>
			<button>Login</button>
		</nav>
	)
}

export default Header;