import chefCloudeLogo from "../assets/chef-claude-icon.png";

export default function Header(){
    return(
        <header>
            <img src={chefCloudeLogo}></img>
            <h1>Chef Claude</h1>
        </header>
    );
}