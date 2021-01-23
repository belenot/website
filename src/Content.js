import React from 'react'
import JobExperience from "./JobExperience";
import MainInfo from "./MainInfo";
import Resume from "./Resume";
import Skills from "./Skills";
import Contacts from "./Contacts";

function Content({page}) {

    return (
        <div className="content">
            <div>
                <MainInfo classes={null} />
            </div>
            <div>
                {page == 'Description' &&
                    <div className='description'>
                            <h2>Hello, there!</h2>
                            <p>
                                I am backend developer.
                                Prefer Kotlin/JVM for backend and React for frontend.
                                Among databases the most used by me is PostgreSQL and MongoDB.
                            </p>
                            <p>
                                I am from Russia. Currently live in Moscow, while get education. 
                                Also for this moment I am working in Sberbank as an Devops engineer.
                            </p>
                            <p>
                                Prefer spend free time by building something while learning something new. 
                                For example, I have the repository on my github account with infrastructure.
                                I learned ansible, aws, terraform, kubernetes. And now my infrastructure fulfill my needs.
                                
                                Currently I am building my own website. 
                            </p>
                    </div>
                }
                {page == 'Skills' &&
                    <Skills />
                }
                {page == 'JobExperience' && 
                    <JobExperience />
                }
                {page == 'Resume' && 
                    <Resume />
                }
                {page == 'Contacts' &&
                    <Contacts />
                }
            </div>
        </div>
    )
}

export default Content