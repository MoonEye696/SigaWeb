/** @jsx jsx */
import { React, AllWidgetProps, jsx, css } from "jimu-core";
import { Tab, Tabs } from "jimu-ui";

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {




  render() {
    const styleInputLogin = css`
    width: 539px;
    height: 65px;
    border: 1px solid #000000;
    border-radius: 10px;
    margin-bottom: 30px;
    `;

    const styleInputPassword = css`
      border: 2px solid #000000	;
    `;

    const styleButton = css`
    position: center;
    width: 310px;
    height: 59px;
    margin-left: 120px;
    font-size: 25px;
    font-family: 'Roboto';
    color: #FFFFFF;
    background: #1F9454;
    border-radius: 15px;
    border: 0px;
    `;


    return <div className="widget-starter jimu-widget">

      <div className="login-area">
        <form action="">
          <input type="text" name="Login" id="login" placeholder="CPF" css={styleInputLogin} /> <br></br>
          <input type="password" name="Login" id="senha" placeholder="Senha" css={styleInputLogin} /> <br></br>
          <button type="submit" css={styleButton} >Entrar</button>
        </form>
      </div>

    </div>;

  }
}
