module.exports = ({ 
    fname,
    lname,
    email,
    pnumber,
    prefix,
	style,
	linkedin,
    github,
    kaggle,
    twitter,
    website,
	skills,
	achievements,
	degree1,
	institute1,
	grade1,
	year1,
	degree2,
	institute2,
	grade2,
	year2,
	degree3,
	institute3,
	grade3,
	year3,
	role1,
	company1,
	org_year1,
	experience1,
	role2,
	company2,
	org_year2,
	experience2,
	role3,
	company3,
	org_year3,
	experience3,
	title1,
	tech1,
	link1,
	project1,
	title2,
	tech2,
	link2,
	project2,
	title3,
	tech3,
	link3,
	project3,
	title4,
	tech4,
	link4,
	project4, 
            }) => {
    
    
       return `
       
       <!DOCTYPE html>
       <html lang="en">
    
       <head>
           <meta charset="utf-8" />
           <title>Profile Builder</title>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
           <link href='https://fonts.googleapis.com/css?family=Scope One' rel='stylesheet'>
           <link href='https://fonts.googleapis.com/css?family=Advent Pro' rel='stylesheet'>
           <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
           <style>
                    *{
                        margin: 0;
                        padding: 0;
                        font-family: 'Lato';

                    }
                    
                    .profile {
                        width: 946px;
                        padding: 10px;
                        border: 2px solid #eee;
                        margin: 10px auto;
                        margin-top: 6px;
                    }
                    
                    .profile header {
                        padding: 10px ;
                        
                    
                    }
                    
                    .profile h1 {
                        font-size: 50px;
                        font-family: 'Lato';
                    }
                    
                    .profile h1 + p {
                        padding: 1em 0 0;
                        margin: 1.2em 0 0;
                    }
                    
                    .profile h2 {
                        font-weight: normal;
                        font-size: 40px;
                        margin: .5em 0;
                        font-family: 'Lato';
                        font-weight: 500;
                        color: #444;
                    }
                        
                    .profile p {
                        font-size: 1em;
                        line-height: 1.4;
                        margin: .375em 0 0;
                    }
                    
                    /* --- style / themes --- */
                    
                    /* formal */
                    
                    .formal header {
                        border: 4px double #ccc;
                    }
                        
                    .info_formal {
                        border-top: 1px solid #ccc;
                        margin:0px 0px 10px 0px;
                        padding-top:10px ;
                        text-decoration : none !important;
                    }
                    
                    /* light */
                    
                    .light {
                        color: rgb(40,40,40);	
                    }
                    
                    .light header {
                        background: #eee;
                    }
                    
                    .light h2{
                        background:  #eee;
                    }

                    .info_light {
                        color: rgb(40,40,40);
                        border-top: 1px solid #ccc;
                        margin:0px 0px 10px 0px;
                        padding-top:10px ;
                        text-decoration : none !important;
                    }
                    
                    .contact_light {
                        color: #777;
                    }
                    
                    .education_light, .experience_light {
                        color: rgb(50,50,50);
                        font-size: 20px;
                    }
                    
                    /* dark */
                    
                    .dark {
                        color: #fff;
                        background-color: #555;
                    }
                    
                    .dark header {
                        border: 1px solid #ccc;
                    }
                    
                    .dark h2{
                        color: #fff;
                    }
                    .info_dark {
                        color: #ccc;
                        border-top: 1px solid #ccc;
                        margin:0px 0px 10px 0px;
                        padding-top:10px ;
                    }
                    
                    .contact_dark {
                        color: rgb(38, 0, 27);
                    }
                    
                    .education_dark, .experience_dark
                    {
                        color: black;   
                        background-color:  #555 !important;
                    }
                    
                    /* colorful */
                    
                    

                    .colorful #subhead{
                        color: rgb(54, 29, 48);
                    }

                    .colorful header {
                        background: rgb(222, 184, 171);
                    }
                    
                    .colorful h1 {
                        color: rgb(20,20,20);
                    }
                    
                    
                    .info_colorful {
                        color: rgb(54, 29, 48);
                        background:  rgb(244, 238, 237);
                        border-top: 1px solid black;
                        margin:0px 0px 10px 0px;
                        padding-top:10px ;
                    }
                    
                    .contact_colorful {
                        color: rgb(20,20,20);
                        background:  rgb(244, 238, 237);
                    }

                    .colorful h2{
                        
                        color: #111;
                        background:  rgb(222, 184, 171);
                    }
                    .colorful h3{
                        
                        color: #111;
                    }
                        
                    .education_colorful{
                        color:rgb(74, 63, 59);
                    }
                    .education_colorful th{
                        color:rgb(74, 0, 38);
                    }
                    .experience_colorful{
                        color:rgb(74, 63, 59) !important;
                    }
                    .project_colorful{
                        color:rgb(74, 63, 59) !important;
                    }


                    .no-break {
                        page-break-inside: avoid;
                    }
                    .clearfix:before {
                        content: "Hello";
                        visibility: hidden;
                        display: inline;
                        height: 10;
                        clear: both;
                        margin: 0;
                        padding: 0;
                    }
                   
                    #edu th, #edu td{
                        padding-top: 5px !important;
                        padding-bottom: 5px !important;
                      }
                    #exp{
                        padding-top: 10px !important;
                        margin: 0px !important;
                        line-height: 1.2;
                        font-family: 'Advent Pro';
                        font-size: 20px;
                        padding-bottom: 0px;
                      }
                      th{
                        font-size: 20px;
                        font-family: 'Advent Pro';
                        font-weight: 500;
                      }
                      td{
                        font-size: 16px;
                        font-family: 'Scope One'
                      }
                    #heading{
                        padding-top: 10px !important;
                        line-height: 1.2;
                        font-family: 'Advent Pro';
                        font-size: 24px;
                        display:inline-block;
                    }
                    #subhead{
                        padding-top: 10px !important;
                        font-family: 'Advent Pro';
                        font-size: 20px;
                        display:inline;
                    }
                    #text_sty{
                        font-size: 16px;
                        font-family: 'Lato';
                        font-weight: 300;
                        padding-bottom: 0px;
                        margin-bottom: 0px;
                    }
           </style>
       </head>
    
       <body>
            <p style="width: 946px; color: #222;text-decoration: none;border-radius: 20px; background: rgb(232,232,232);font-family: 'Lato'; border: 1px solid #eee; padding: 2px;display:block;
            margin: 2px 0px 0px 22px;">
            Made  using  Five  Minute  Resume  App&nbsp&nbsp<a style =" float: right; padding-right: 10px; text-decoration: none; color: rgb(0, 0, 135); "href="https://github.com/ruchit1131/Resume-Maker-App">Source Code</a>
            &nbsp&nbsp<a style ="float: right;padding-right: 10px; text-decoration: none; color: rgb(0, 0, 135); "href="https://five-minute-resume.herokuapp.com/">Link to app</a>
            </p>
            
            <div class="profile ${style}">
            <div id="content">
                <header>
                    <div>
                        <h1 style="margin:0px 0px 0px 5px; padding: 0px;  font-weight:300; display:inline-block">${prefix} ${fname}</h1> 
                        <h1 style="margin: 0px; padding: 0px;font-weight:500;display:inline-block"> &nbsp${lname}</h1>
                    </div>
                    <div style="font-family: 'Advent Pro';" class="info_${style}">
                        <div>
                            ${email ? `<span style="margin:0px 0px 0px 9px; text-decoration: none; border 0px; padding: 0px;display:inline-block;" class="contact_${style}"><a href="mailto:${email}"><i class="fa fa-envelope" style="color:grey"></i></a>&nbsp&nbsp${email}</span> &nbsp&nbsp&nbsp&nbsp`:''}
                            ${pnumber ?`<span style="text-decoration: none;border 0px;"class="contact_${style}"><a href="tel:+91${pnumber}"><i class="fa fa-mobile-phone" style="color:grey"></i></a>&nbsp&nbsp${pnumber}</span>`:''}
                        </div>
                   
                        <div class="links_${style}" style="position:absolute;top: ${style == "formal" ? '128px': '124px'};right: 50px;width: 200px;height: 100px;">
                        ${website ? '<span style="float: right; padding: 7px; padding-bottom:0px; color: rgb(0, 0, 135);" class="contact_':''}  ${website ? `${style}`:''}  ${website ? '"><a href="':''}${website? website:''}${website ? '" style="text-decoration:none; color:rgb(0, 0, 135)"><i class="fa fa-link" style="color: grey"></i></a></span>':''}
                        ${twitter ? '<span style="float: right; padding: 7px; padding-bottom:0px; color: rgb(0, 0, 135);" class="contact_':''}  ${twitter ? `${style}`:''}  ${twitter ? '"><a href="':''}${twitter? twitter:''}${twitter ? '" style="text-decoration:none; color:rgb(0, 0, 135)"><i class="fa fa-twitter" style="color: grey"></i></a></span>':''}
                        ${kaggle ? '<span style="float: right; padding: 7px; padding-bottom:0px; color: rgb(0, 0, 135);" class="contact_':''}  ${kaggle ? `${style}`:''}  ${kaggle ? '"><a href="':''}${kaggle? kaggle:''}${kaggle ? '" style="text-decoration:none; color:rgb(0, 0, 135)"><i class="fab fa-kaggle" style="color: grey"></i></a></span>':''}
                        ${github ? '<span style="float: right; padding: 7px; padding-bottom:0px; color: rgb(0, 0, 135);" class="contact_':''}  ${github ? `${style}`:''}  ${github ? '"><a href="':''}${github? github:''}${github ? '" style="text-decoration:none; color:rgb(0, 0, 135)"><i class="fa fa-github" style="color: grey"></i></a></span>':''}
                        ${linkedin ? '<span style="float: right; padding: 7px; padding-bottom:0px; color: rgb(0, 0, 135);" class="contact_':''}  ${linkedin ? `${style}`:''}  ${linkedin ? '"><a href="':''}${linkedin? linkedin:''}${linkedin ? '" style="text-decoration:none; color:rgb(0, 0, 135)"><i class="fa fa-linkedin" style="color: grey"></i></a></span>':''}
                       
                        </div>  
     
                        ${skills ? `<div style="font-family: 'Advent Pro';" class="info_${style}">
                        <h3 style=" font-family:'Lato'; margin:0px 0px 5px 5px; padding: 0px; font-size:30px; display:block">Skills</h3>
                        <span style="margin:0px 0px 0px 5px; padding: 0px; font-size:16px;line-height: 1.5; display:block">${skills}</span>
                        </div>`:''}
                    </div>                
                </header>

                <hr>
                ${degree1 || degree2 || degree3? `
                <h2 style="margin-top:5px; margin-bottom: 5px">${degree1 || degree2 || degree3 ? 'Education': ''}</h2>
                <div class="education_${style}">
                        <table id="edu" class="table text-center table-striped table-bordered">
                            <thead>
                                <tr >
                                <th scope="col"><b style="font-weight: 400 ">DEGREE/GRADE</b></th>
                                <th scope="col"><b style="font-weight: 400">INSTITUTION</b></th>
                                <th scope="col"><b style="font-weight: 400">SCORE</b></th>
                                </tr>
                            </thead>
                            <tbody style ="background:inherit">
                                ${degree1 ? `${degree1 ? '<tr>':''}
                                <td>${degree1} &nbsp ${degree1 && year1 ? '(':''}${year1}${degree1 && year1 ? ')':''}</td>
                                <td>${institute1}</td>
                                <td>${grade1}</td>
                                ${degree1 ? '</tr>':''}` : ''}

                                ${degree2 ? `${degree2 ? '<tr>':''}
                                <td>${degree2} &nbsp${degree2 && year2 ? '(':''}${year2}${degree2 && year2 ? ')':''}</td>
                                <td>${institute2}</td>
                                <td>${grade2}</td>
                                ${degree2 ? '</tr>':''}` : ''}

                                ${degree3 ? `${degree3 ? '<tr>':''}
                                <td>${degree3} &nbsp${degree3 && year3? '(':''}${year3}${degree3 && year3 ? ')':''}</td>
                                <td>${institute3}</td>
                                <td>${grade3}</td>
                                ${degree3 ? '</tr>':''}`:''}
                            </tbody>
                        </table>
               </div>
                `: ''}

         


               ${company3 || company1 || company2 ?`<h2 style="margin-top:5px; margin-bottom: 5px">${company3 || company1 || company2? 'Experience':''}</h2>
               <div class="experience_${style}">
                       <table style="margin-bottom: 0px; padding-bottom: 0px;" class="table">
                           <tbody style="margin-bottom: 0px; padding-bottom: 0px;">
                               ${company1 ? `<tr>
                               <td class="w-25" id="exp">${company1} ${company1 ? '<br>':''}<span style="font-size:16px;font-family: 'Advent Pro';">${role1}</span>${company1 ? '<br>':''}<span style="font-family: 'Advent Pro';font-size:13px;">${org_year1}</span></td>
                               <td id="text_sty" style="padding-top: 10px;">${experience1}</td>
                               </tr>`:''}

                               ${company2 ? `${company2 ? '<tr>':''}
                               <td id="exp">${company2} ${company2 ? '<br>':''}<span style="font-size:16px;font-family: 'Advent Pro'; line-height:1; font-weight:bold;">${role2}</span>${company2 ? '<br>':''}<span style="font-family: 'Advent Pro'; line-height:1;font-size:13px;">${org_year2}</span></td>
                               <td id="text_sty">${experience2}</td>
                               ${company2 ? '</tr>':''}`:''}

                               ${company3 ?`${company3 ? '<tr>':''}
                               <td id="exp">${company3} ${company3 ? '<br>':''}<span style="font-size:16px;font-family: 'Advent Pro'; line-height:1; font-weight:bold;">${role3}</span>${company3 ? '<br>':''}<span style="font-family: 'Advent Pro'; line-height:1;font-size:13px;">${org_year3}</span></td>
                               <td id="text_sty">${experience3}</td>
                               ${company3  ? '</tr>':''}`:''}
                           </tbody>
                       </table>
              </div>`:''}

                    <hr>
             ${title1||title2||title3||title4 ? 
              `<div>
                <h2 style="margin-top: 0px; padding-top:0px; margin-bottom: 5px">${title1||title2||title3||title4  ? 'Projects':''}</h2>
                <section class="experience_${style}">
                    ${title1 ? `<div class="no-break " style="padding: 0px; margin: 0px">
                        <a id="heading" style="text-decoration: none; color:rgb(0, 0, 135); margin:0px 0px 0px 5px; padding: 0px;display:inline-block" href="${link1? link1:'#'}"> ${title1} <a>  ${tech1 ? '&nbsp&nbsp|&nbsp&nbsp':''} <span id="subhead">${tech1}<span>
                        <p class = "project_${style}" style="font-family: 'Lato';font-weight: 300; margin:0px 0px 0px 10px;font-size: 16px">${project1}</p>
                    </div>`:''}
                    
                    ${title2 ? `<div class="no-break" style="padding: 0px; margin: 0px">
                        <a id="heading" style="text-decoration: none; color:rgb(0, 0, 135); margin:0px 0px 0px 5px; padding: 0px;display:inline-block" href="${link2? link2:'#'}"> ${title2} <a>  ${tech2 ? '&nbsp&nbsp|&nbsp&nbsp':''} <span id="subhead">${tech2}<span>
                        <p class = "project_${style}" style="font-family: 'Lato';font-weight: 300;margin:0px 0px 0px 10px;font-size: 16px">${project2}</p>
                    </div>`:''}
                   
                    ${title3 ? `<div class="no-break" style="padding: 0px; margin: 0px">
                        <a id="heading" style="text-decoration: none; color:rgb(0, 0, 135); margin:0px 0px 0px 5px; padding: 0px;display:inline-block" href="${link3? link3:'#'}"> ${title3} <a>  ${tech3 ? '&nbsp&nbsp|&nbsp&nbsp':''} <span id="subhead">${tech3}<span>
                        <p class = "project_${style}" style="font-family: 'Lato';font-weight: 300;margin:0px 0px 0px 10px;font-size: 16px">${project3}</p>
                    </div>`:''}

                    ${title4 ? `<div class="no-break" style="padding: 0px; margin: 0px">
                        <a id="heading" style="text-decoration: none; color:rgb(0, 0, 135); margin:0px 0px 0px 5px; padding: 0px;display:inline-block" href="${link4? link4:'#'}"> ${title4} <a>  ${tech4 ? '&nbsp&nbsp|&nbsp&nbsp':''} <span id="subhead">${tech4}<span>
                        <p class = "project_${style}" style="font-family: 'Lato';font-weight: 300; font-size: 16px;margin:0px 0px 0px 10px;" >${project4}</p>
                    </div>`:''}

                </section>
    
            </div>`:''}
                    
            ${achievements ? `<div class="no-break clearfix">
                        
                <h2 style="margin-top:5px; margin-bottom: 5px">Achievements</h2>          
                <div class="experience_${style}" id="text_sty">${achievements}</div>
                    
            </div>`:''}
            </div>
       </div>
 </body>
</html>
    
    `;
    };