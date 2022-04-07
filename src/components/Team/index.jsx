import React from 'react';
import { useTranslation } from 'react-i18next';


export default function Team() {

    return (
        <div>
            <div class="wrapper">
                <h1>Our Team</h1>
                <div class="team">
                    <div class="team_member">
                        <div class="team_img">
                            <img src="" alt="Team_image"/>
                        </div>
                        <h3>Paul Doe</h3>
                        <p class="role">UI developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                    <div class="team_member">
                        <div class="team_img">
                            <img src="team2.png" alt="Team_image"/>
                        </div>
                        <h3>Rosie Meg</h3>
                        <p class="role">Tester</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
                    <div class="team_member">
                        <div class="team_img">
                            <img src="team3.png" alt="Team_image"/>
                        </div>
                        <h3>Alex Wood</h3>
                        <p class="role">Support Lead</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
