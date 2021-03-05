import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1 style={{ color: "green" }}>{title}</h1>
            

        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker",
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header;