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

    th, td {
        padding: 1px 10px;
    }



    `

function About(props) {


    return (
        <StyledDiv>
            <p>
                After 2.5 years, the Bingo Tournament is back! This is the first JP Bingo tourney. It wil
                consist of two stages.
            </p>
            <h3>Tournament rules</h3>
            <ul>
                <li>Standard bingo rules apply</li>
                <li>Boards must be generated using the latest Japanese bingo version</li>
                <li>Races must be played on <b>Racetime.gg</b></li>
                <li>Races must be announced in the tournament discord as they are about to start</li>
                <li>SNB and ESNB races may not count as a tournament race</li>
            </ul>
            <br /><br />
            <h3>Stage 1 - Swiss rounds</h3>
            <p>
                During this stage, every week, each player will be paired to another player for a bingo race.
                This pairing is calculated according to the points you have gathered so far, meaning you will
                play against people with similar scores. There will be <b>4</b> of these rounds.
            </p>

            <ul>
                <li>Each rounds starts on a <b>Monday, 4pm UTC</b> and lasts one week</li>
                <li>You get <b>3 points</b> for a win, <b>1 point</b> for a draw and <b>0</b> points for a loss, forfeit or no show</li>
                <li>The top 16 players after the rounds are over will continue to the next stage</li>
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
                After the Swiss rounds have been played, the top 16 players will continue to a single elimination bracket. All the races will be <b>best of 1</b>, except for
                the grand finals, which will be <b>best of 3</b>.
            </p>

            <br />
            <h3>Schedule</h3>
            <br />

                <table>
                    <tbody>
                        <tr>
                            <td>Jul 19th</td>
                            <td>Sign up opens</td>
                        </tr>
                        <tr>
                            <td>Aug 3rd</td>
                            <td>Sign up closes</td>
                        </tr>
                        <tr>
                            <td>Aug 10th</td>
                            <td>Start of Stage 1</td>
                        </tr>
                        <tr>
                            <td>Sep 7th</td>
                            <td>Start of Stage 2</td>
                        </tr>
                        <tr>
                            <td>Oct 5th</td>
                            <td>Expected end of Tournament</td>
                        </tr>
                    </tbody>
                </table>

            <br /><br />
            <p>Join the tourney Discord to enter the tourney or to follow along. Contact Fleush#3233 or xwillmarktheplace#4400 on
               Discord for more information.</p>
        </StyledDiv>
    );
}

export default About;