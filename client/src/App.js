import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Header from "./Header";
import About from './About';
import './App.css';


 class App extends Component {

//   state = {
//     fname: '',
//     lname: '',
//     email: '',
//     pnumber: '',
//     prefix: '',
// 	style: 'formal',
// 	linkedin: '',
// 	github: '',
// 	skills: '',
// 	achievements: '',
// 	degree1:'',
// 	institute1:'',
// 	grade1:'',
// 	year1:'',
// 	degree2:'',
// 	institute2:'',
// 	grade2:'',
// 	year2:'',
// 	degree3:'',
// 	institute3:'',
// 	grade3:'',
// 	year3:'',
// 	role1:'',
// 	company1:'',
// 	org_year1:'',
// 	experience1:'',
// 	role2:'',
// 	company2:'',
// 	org_year2:'',
// 	experience2:'',
// 	role3:'',
// 	company3:'',
// 	org_year3:'',
// 	experience3:'',
// 	title1:'',
// 	tech1:'',
// 	link1:'',
// 	project1:'',
// 	title2:'',
// 	tech2:'',
// 	link2:'',
// 	project2:'',
// 	title3:'',
// 	tech3:'',
// 	link3:'',
// 	project3:'',
// 	title4:'',
// 	tech4:'',
// 	link4:'',
// 	project4:'',
//   }


state = {
	
		"fname": "Ruchit",
		"lname": "Karnawat",
		"email": "ruchitkarnawat1999@gmail.com",
		"pnumber": "981211****",
		"prefix": "",
		"style": "light",
		"linkedin": "https://www.linkedin.com/in/ruchit-karnawat-509a0b139/",
		"github": "https://github.com/ruchit1131",
		"twitter": "https://twitter.com/karnawat_ruchit",
		"kaggle": "",
		"website": "",
		"skills": "BACKEND:&nbsp;&nbsp;&nbsp;C,&nbsp&nbsp;C++,&nbsp;&nbsp;Node.js,&nbsp;&nbsp;Express.js,&nbsp;&nbsp;Python,&nbsp;&nbsp;PHP,&nbsp;&nbsp;Java<br>\nFRONTEND:&nbsp;&nbsp;&nbsp;HTML,&nbsp;&nbsp;CSS,&nbsp;&nbsp;Bootstrap,&nbsp;&nbsp;Javascript(Templating&nbsp;&nbsp;Engine:&nbsp;&nbsp;EJS,&nbsp;&nbsp;Mustache),&nbsp;&nbsp;ReactJS<br>\nDATABASE:&nbsp;&nbsp;&nbsp;MySQL,&nbsp;&nbsp;MongoDB<br/>DATA&nbsp;&nbsp;STRUCTURES&nbsp;&nbsp;AND&nbsp;&nbsp;ALGORITHMS<br>FAMILIAR:&nbsp;&nbsp;&nbsp;Data&nbsp;&nbsp;Visualization,&nbsp;&nbsp;Machine&nbsp;&nbsp;Learning,&nbsp;&nbsp;OOPS,&nbsp;&nbsp;DBMS,&nbsp;&nbsp;VSCode,&nbsp;&nbsp;Jupyter&nbsp;&nbsp;Notebook,&nbsp;&nbsp;phpMyAdmin",
		"achievements": "<li>Received <b>Golden Award</b> in <b>Silver 2020 Challenge</b> by <b>Codility</b> for correct functionality and scalability.</li><li>Institute <b>Rank 5</b> on <b>GeeksforGeeks</b></li><li><b>Best Student Award</b> in 12th standard given by <b>The Times Group</b>. Earned <b>Merit certificate</b> in class 10.</li>",
		"degree1": "B. Tech CSE",
		"institute1": "NIT KURUKSHETRA&nbsp;(IIIT, SONEPAT)",
		"grade1": "7.08/10 CGPA",
		"year1": "2016-2020",
		"degree2": "Senior Secondary",
		"institute2": "B. R. BIRLA PUBLIC SCHOOL, JODHPUR",
		"grade2": "92.2% (CBSE)",
		"year2": "2016",
		"degree3": "Secondary",
		"institute3": "B. R. BIRLA PUBLIC SCHOOL, JODHPUR",
		"grade3": "10/10 CGPA",
		"year3": "2014",
		"role1": "TEACHING ASSISTANT INTERN",
		"company1": "AARMON TECH.",
		"org_year1": "May 2019 – July 2019",
		"experience1": "<ul><li><b>Data Structures</b> in <b>C, C++</b>. </li><li> <b>Topics:</b>&nbsp; Array, String, Linked List , Stack , Queue , Tree, Trie, Heap and Graph.</li></ul>",
		"role2": "TRAINEE",
		"company2": "AARMON TECH.",
		"org_year2": "May 2018 – July 2018",
		"experience2": "<ul><li>Completed training on <a href='https://drive.google.com/file/d/1w-FidKSd3thjyqC0ao6Xbw7U2lf7KF4l/view?usp=sharing' style='text-decoration: none'>MACHINE LEARNING STANDARD MODULE</a> and scored <b>‘A’ grade</b>. </li><li><b>Sentiment Analysis</b> using data from <a href='https://github.com/ruchit1131/PROJECTS_miscellaneous' style='text-decoration: none'>Twitter API, Handwritten Digit Recognition</a> using <b>Sklearn</b>.</li><li> Assistant Teacher in a 7 day Summer Training Program on <b>Python</b> for <b>teachers of JIET college</b>.</li></ul>",
		"role3": "",
		"company3": "",
		"org_year3": "",
		"experience3": "",
		"title1": "Movies' Bucket App",
		"tech1": "Node.js, Express, React.js, MongoDB, HTML, CSS, Javascript, Bootstrap",
		"link1": "https://github.com/ruchit1131/Movie-Bucket/tree/v1.0.0",
		"project1": "<b>Deployed</b> an <b>MVC CRUD</b> App on <a href='https://movies-bucket.herokuapp.com/' style='text-decoration: none'><b>Heroku</b></a> made using <b>MERN stack, OMDB API, Youtube API, 0Auth 2.0, and Bcrypt</b>. Search movies and <b>get all information:</b> Title, Poster, IMDB Rating, Language, Genre, Actors, etc. <b>Watch Trailer</b>, add movies to the Bucket List, mark Favourites, mark watched/unwatched, move to Bin and Delete. Profile information <b>stored on local storage</b> when you log in.",
		"title2": "Food Shala",
		"tech2": "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
		"link2": "https://github.com/ruchit1131/food_ordering_system_php",
		"project2": "A <b>CRUD</b> website - food delivery system made using <b>HTML, CSS, JavaScript, Bootstrap, PHP,</b> and <b>MySQL</b> with <b>Cart Functionality</b>, <b>Password Encryption</b>, <b>Cookies</b>, and Preference: Veg/Non-veg on sign up. Database <b>normalized in BCNF.</b>",
		"title3": "Waste Segregation",
		"tech3": "Python, Keras, OpenCV, Raspberry Pi 2B+",
		"link3": "https://github.com/ruchit1131/Waste-Seggregation",
		"project3": "Classifying waste into biodegradable and nonbiodegradable using <b>object recognition </b>, prediction and <b>classification</b> using <b>Keras, Sklearn</b> and <b>OpenCv</b> on <b>Raspberry Pi 2B+</b> with <b>91% accuracy</b>.",
		"title4": "Fastag Extention",
		"tech4": "Python, fast2sms API",
		"link4": "https://github.com/ruchit1131/FASTAG_EXTENTION",
		"project4": "Extending the concept of <b>FasTag</b> used for automated toll collection to include 2 new features: <b>Police Challan collection</b> and <b>Petrol Pump Payments</b> using <b>'requests' package </b> and <b>fast2sms API</b> for sending <b>OTP</b> and Update information through SMS."
}

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
      console.log(this.state);
  }

  render() {
    return (
      <>
<div className="form" id="form" role="form">
<section>
	<h2>Name:</h2>
	<select name = "prefix" value={this.state.prefix} onChange={this.handleChange}>
		<option value="">&nbsp;</option>
		<option value="Mr.">Mr.</option>
		<option value="Miss">Miss</option>
		<option value="Mrs.">Mrs.</option>
		<option value="Ms.">Ms.</option>		
	</select>

	<input type="text" id="firstName" placeholder="First Name" name="fname" onChange={this.handleChange}/>

	<input type="text" id="lastName" placeholder="Last Name" name="lname" onChange={this.handleChange}/>
</section>

<section >
	<h2>Info:</h2>
	<input type="text" name="email" placeholder="Email" onChange={this.handleChange}/><br />
	<input type="text" name="pnumber" placeholder="Phone Number" onChange={this.handleChange}/>
	<input type="text" name="linkedin" placeholder="Linkedin link" onChange={this.handleChange}/>
	<input type="text" name="github" placeholder="Github link" onChange={this.handleChange}/>
	<input type="text" name="kaggle" placeholder="Kaggle link" onChange={this.handleChange}/>
	<input type="text" name="twitter" placeholder="Twitter link" onChange={this.handleChange}/>
	<input type="text" name="website" placeholder="Website link" onChange={this.handleChange}/>
</section>

<section >
	<h2>SKILLS:</h2>
	<textarea name="skills" rows="6" cols="80" onChange={this.handleChange}></textarea>
</section>

<section >
<h1>EDUCATION</h1>
	<br></br>
	<hr></hr>
	<br></br>
	<br></br>
	<h2>EDUCATION 1 :</h2>
	<input type="text" name="degree1" placeholder="Degree" onChange={this.handleChange}/><br />
	<input type="text" name="institute1" placeholder="Institute Name" onChange={this.handleChange}/>
	<input type="text" name="grade1" placeholder="Grade" onChange={this.handleChange}/>
	<input type="text" name="year1" placeholder="Duration" onChange={this.handleChange}/>

	<br></br>
	<br></br>

	<h2>EDUCATION 2 :</h2>
	<input type="text" name="degree2" placeholder="Degree" onChange={this.handleChange}/><br />
	<input type="text" name="institute2" placeholder="Institute Name" onChange={this.handleChange}/>
	<input type="text" name="grade2" placeholder="Grade" onChange={this.handleChange}/>
	<input type="text" name="year2" placeholder="Duration" onChange={this.handleChange}/>

		<br></br>
		<br></br>

	<h2>EDUCATION 3 :</h2>
	<input type="text" name="degree3" placeholder="Degree" onChange={this.handleChange}/><br />
	<input type="text" name="institute3" placeholder="Institute Name" onChange={this.handleChange}/>
	<input type="text" name="grade3" placeholder="Grade" onChange={this.handleChange}/>
	<input type="text" name="year3" placeholder="Duration" onChange={this.handleChange}/>
</section>


<section >
	<h1>EXPERIENCE</h1>
	<br></br>
	<hr></hr>
	<br></br>
	<br></br>
<h2>EXPERIENCE 1 :</h2>
	<input type="text" name="company1" placeholder="Company Name" onChange={this.handleChange}/>
	<input type="text" name="role1" placeholder="Role/Position" onChange={this.handleChange}/><br />
	<input type="text" name="org_year1" placeholder="Duration" onChange={this.handleChange}/>
	<textarea type="text" rows="6" cols="80" name="experience1" placeholder="What you did" onChange={this.handleChange}/>

	<br></br>
	<br></br>

	<h2>EXPERIENCE 2 :</h2>
	<input type="text" name="company2" placeholder="Company Name" onChange={this.handleChange}/>
	<input type="text" name="role2" placeholder="Role/Position" onChange={this.handleChange}/><br />
	<input type="text" name="org_year2" placeholder="Duration" onChange={this.handleChange}/>
	<textarea type="text" rows="6" cols="80" name="experience2" placeholder="What you did" onChange={this.handleChange}/>

		<br></br>
		<br></br>

	<h2>EXPERIENCE 3 :</h2>
	<input type="text" name="company3" placeholder="Company Name" onChange={this.handleChange}/>
	<input type="text" name="role3" placeholder="Role/Position" onChange={this.handleChange}/><br />
	<input type="text" name="org_year3" placeholder="Duration" onChange={this.handleChange}/>
	<textarea  rows="6" cols="80" name="experience3" placeholder="What you did" onChange={this.handleChange}/>
</section>

<section >
<h1>PROJECTS</h1>
	<br></br>
	<hr></hr>
	<br></br>
	<br></br>

	<h2>PROJECT 1 :</h2>
	<input type="text" name="title1" placeholder="Project Name" onChange={this.handleChange}/>
	<input type="text" name="tech1" placeholder="Technologies used" onChange={this.handleChange}/>
	<input type="text" name="link1" placeholder="Link to Project" onChange={this.handleChange}/><br />
	<textarea rows="6" cols="80" type="text" name="project1" placeholder="Something about the project.." onChange={this.handleChange}/>

	<br></br>
	<br></br>

	<h2>PROJECT 2 :</h2>
	<input type="text" name="title2" placeholder="Project Name" onChange={this.handleChange}/>
	<input type="text" name="tech2" placeholder="Technologies used" onChange={this.handleChange}/>
	<input type="text" name="link2" placeholder="Link to Project" onChange={this.handleChange}/><br />
	<textarea rows="6" cols="80" type="text" name="project2" placeholder="Something about the project.." onChange={this.handleChange}/>

	<br></br>
	<br></br>

	<h2>PROJECT 3 :</h2>
	<input type="text" name="title3" placeholder="Project Name" onChange={this.handleChange}/>
	<input type="text" name="tech3" placeholder="Technologies used" onChange={this.handleChange}/>
	<input type="text" name="link1" placeholder="Link to Project" onChange={this.handleChange}/><br />
	<textarea rows="6" cols="80" type="text" name="project3" placeholder="Something about the project.." onChange={this.handleChange}/>

	<br></br>
	<br></br>

	<h2>PROJECT 4 :</h2>
	<input type="text" name="title4" placeholder="Project Name" onChange={this.handleChange}/>
	<input type="text" name="tech4" placeholder="Technologies used" onChange={this.handleChange}/>
	<input type="text" name="link4" placeholder="Link to Project" onChange={this.handleChange}/><br />
	<textarea rows="6" cols="80" type="text" name="project4" placeholder="Something about the project.." onChange={this.handleChange}/>


</section>

<section >
	<h2>ACHIEVEMENTS:</h2>
	<textarea name="achievements" placeholder="For new line use: <br> You can write content using html tags and css" rows="6" cols="80" onChange={this.handleChange}></textarea>
</section>

<section >
	<h2>Style</h2>
	<select  style = {{textAlignLast: 'center'}} name="style" value={this.state.style} onChange={this.handleChange}>
		<option value="formal">Formal</option>
		<option value="light">Light</option>
		<option value="dark">Shady</option>
		<option value="colorful">Colorful</option>		
	</select>
</section>

<section >
	<p>
		<button onClick={this.createAndDownloadPdf}><strong><h2 style={previewBtn}>Download PDF</h2></strong></button>
	</p>
</section>

</div>

<div id="preview" role="article"></div>

<script src="mustache.js"></script>
<script src="profile.js"></script>	
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
</>
    );
  }
}

const previewBtn = {
	display: 'inline-block',
	maxWidth: '13.5em',
	color: 'rgb(255, 255, 255)',
	background: '#71f6ff',
	padding: '1.2em',
	border: '5px solid rgb(252, 153, 153)',
	borderRadius: '.5em',
	margin: '.25em .125em'
}

class Show extends Component{

	render(){
	  return(
		<Router>
		  <Header/>
		  <Route exact path = "/" component={App}/>
		  <Route path="/about" component={About} />
		</Router>
	  )
	}
  }


export default Show;
