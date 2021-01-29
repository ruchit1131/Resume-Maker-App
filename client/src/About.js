import React from 'react'
import './App.css';
export default function About() {
    return (
        <React.Fragment>
            <div className="form">
                <p style = {{maxWidth : '400px'}}>This is a Five Mintue Resume App v1.0.0. You can use it to create your resume without wasting time on styling.<br/>Just enter your details and download your resume in PDF format. <br/>You can select from four different Styles. The styles and simple, minimalistic and organized.<br/> You can enter data and even custom format in 
                the text box itself if you have some knowlegde of HTML/CSS.<br/>E.g. You can use &lt;br&gt; for new line.<br/> I hope you find this App useful.<br/>
                Developed by Ruchit Karnawat.<br/><br/>
                <a style = {{textDecoration: 'none'}} href = "https://github.com/ruchit1131">Github</a><br/>
                <a style = {{textDecoration: 'none'}} href = "https://www.linkedin.com/in/ruchit-karnawat-509a0b139/">Linkedin</a>
                <br/><br/>Enjoy!<br/></p>
            </div>
        </React.Fragment>
    )
}
