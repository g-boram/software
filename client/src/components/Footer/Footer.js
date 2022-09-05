import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
        <footer className="footer">
            <ul>
              <li className="priv"><a href="#n">개인정보처리방침</a></li>
              <li className="em_bt"><a href="#n">이메일주소무단수집거부</a></li>
              <li className="em_bt"><a href="#n">Nautuer</a></li>
            </ul>
            <div className="ft_p">
              <span>주소 : 서울시 xxx xxx</span>
              <span>Tel : 02-1111-1111</span>
            </div>
            <p>COPYRIGHT &copy; React 200, Go Boram .{this.props.name}</p>
        </footer>
    );
  }
}

export default Footer;