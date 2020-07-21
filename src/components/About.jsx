import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    max-width: 800px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: left;
        padding: 20px 0px;
    }

    ul ul {
        text-align: left;
        padding-left: 50px;
    }

    h3 {
        margin: 10px;
        color: var(--yellow)
    }

    #schedule {
        div {
            display: inline-block;
            padding: 0px 15px;
        }
        margin-left: 70px;

    }



    `

function About(props) {


    return (
        <StyledDiv>
            <p>
                After 2.5 years, the Bingo Tournament is back! This is the first JP Bingo tourney. It wil
                consist of two stages.
                This site is mostly used for Stage 1.
            </p>
            <h3>Tournament rules</h3>
            <ul>
                <li>Standard bingo rules apply</li>
                <li>Boards must be generated using the latest Japanese bingo version</li>
                <li>Races must be played on a Japanese version of the game</li>
                <li>Races must be played on <b>Racetime.gg</b></li>
                <li>Races must be announced in the tournament discord as they are about to start</li>
                <li>SNB and ESNB races may not count as a tournament race</li>
            </ul>
            <br /><br />
            <h3>Stage 1 - Swiss rounds</h3>
            <p>
                During this stage, every week, each player will be paired to another player for a bingo race.
                This pairing is calculated according to the points you have gathered so far, meaning you will
                play against people with similar scores. Depending on the amount of entrants, 4-5 rounds will
                be played.
            </p>

            <ul>
                <li>Each rounds starts on a <b>Monday, 4pm UTC</b> and lasts one week</li>
                <li>You get <b>3 points</b> for a win, <b>1 point</b> for a draw and <b>0</b> points for a loss, forfeit or no show</li>
                <li>The top 8 or 16 players (tbd) after the rounds are over will continue to the next stage</li>
                <li>Ties are broken as follows, in this order:
                        <ul>
                        <li>Players with <b>fewer forfeits</b> get priority, then</li>
                        <li>Players with <b>a lower median</b> over their tourney times get priority, then</li>
                        <li>Players that are still tied, race a best of three on shorter bingo</li>
                    </ul>

                </li>
            </ul>
            <br /><br />
            <h3>Stage 2 - Single Elimination Bracket</h3>
            <p>
                After the Swiss rounds have been played, the top players will continue to a single elimination bracket.
                Challonge will be used to keep track of progress.  All the races will be <b>best of 1</b>, except for
                the grand finals, which will be <b>best of 3</b>.
            </p>

            <br />
            <h3>Schedule</h3>
            <br />
            <div id='schedule'>
                <div>
                    <span>Jul 19th:</span><br />
                    <span>Aug 3rd:</span><br />
                    <span>Aug 10th:</span><br />
                    <span>Sep 7th:</span><br />
                </div>
                <div>
                    <span>Sign up opens</span><br />
                    <span>Sign up closes</span><br />
                    <span>Start of Stage 1</span><br />
                    <span>Expected end of Stage 1</span><br />
                </div>
            </div>
            <br /><br />
            <p>Join the tourney Discord to enter the tourney or to follow along. Contact Fleush#3233 or xwillmarktheplace#4400 on
               Discord for more information.</p>
        </StyledDiv>
    );
}

export default About;