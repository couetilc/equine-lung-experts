import { Component } from 'react';
import Link from './Link';

const isDesktop = () => typeof window === 'undefined' ? true : window.innerWidth > 760;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isClicked: false,
      inDesktopView: isDesktop(),
    };

    this.toggleMenu = this._toggleMenu.bind(this);
    this.updateMenu = this._updateMenu.bind(this);
  }

  _toggleMenu() {
    if (!this.state.inDesktopView) {
      this.setState((prevState) => ({
        isClicked: !prevState.isClicked,
      }));
    }
  }

  _updateMenu() {
    const wasVisible = this.state.isVisible;
    const wasDesktopView = this.state.inDesktopView;
    const inDesktopView = isDesktop();
    const isVisible = inDesktopView || this.state.isClicked;

    if (wasVisible !== isVisible) {
      this.setState({
        isVisible,
      });
    }

    if (wasDesktopView !== inDesktopView) {
      this.setState({
        inDesktopView,
      });
    }
  }

  componentWillMount() {
    this.updateMenu();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenu);
    document.querySelectorAll('.nav-menu-toggle-mobile')
      .forEach((li) => li.removeEventListener('click', this.toggleMenu));
  }

  render() {
    this.updateMenu();

    const styles = {
      menu_item: {
        display: this.state.isVisible ? 'flex' : 'none',
      },
    };

    let mobile_toggle = null;
    let class_menu_toggle = 'home-icon';
    const class_menu_toggle_selected = 'selected-home';

    if (this.state.inDesktopView) {
      class_menu_toggle += ' home-icon-desktop';
    } else {
      if (this.state.isClicked) {
        mobile_toggle = (
          <li className="nav-menu-toggle-mobile">
            <Link href='#' className='mobile-menu-toggle home-icon-close' onClick={this.toggleMenu} />
          </li>
        );
      } else {
        mobile_toggle = (
          <li className='nav-menu-toggle-mobile'>
            <Link href='#' className='mobile-menu-toggle home-icon-open' onClick={this.toggleMenu} />
          </li>
        );
      }
    }

    return (
      <ul>
        {mobile_toggle}
        <li className="nav-menu-toggle">
          <Link exact className={class_menu_toggle} style={styles.menu_item} href='/' activeClassName={class_menu_toggle_selected} />
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/#service-summary' activeClassName='selected'>Services</Link>
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/#people-summary' activeClassName='selected'>About Us</Link>
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/contact' activeClassName='selected'>Contact Us</Link>
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/balfsample' activeClassName='selected'>Submit a Sample</Link>
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/environmentalconsulting' activeClassName='selected'>Environmental Consulting</Link>
        </li>
        <li className="nav-menu-item" style={styles.menu_item}>
          <Link href='/resources' activeClassName='selected'>Resources</Link>
        </li>
      </ul>
    );
  }
}
