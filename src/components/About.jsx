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
        color: var(--pink)
    }

    th, td {
        padding: 1px 10px;
    }

    a {
        color: var(--light-pink);
        font-weight: bold;
        text-decoration: none;
    }


    `

const bingoLB = <a href='https://xwmtp.github.io/bingo-leaderboard' target="_blank" rel="noopener noreferrer">Bingo Leaderboard</a>
const racetime = <a href='https://racetime.gg/oot' target="_blank" rel="noopener noreferrer">Racetime.gg</a>

function About(props) {


    return (
        <StyledDiv>
            <p>
                The OoT Bingo Tournament is back! Like last year, there will be two faces. However, the pairing
                within point groups will be based on your {bingoLB} seed this year rather than being subject to RNG.
            </p>
            <h3>Tournament rules</h3>
            <ul>
                <li>Standard bingo rules apply</li>
                <li>Boards must be generated using the latest Japanese bingo version</li>
                <li>Races must be played on {racetime}</li>
                <li>Races must be announced in the tournament discord as they are about to start</li>
                <li>SNB and ESNB races may not count as a tournament race, a separate race room should be used</li>
                <li>It is not allowed to help entrants with their bingo during tournament matches, and entrants can’t watch the restream of their match while playing</li>
            </ul>
            <br /><br />
            <h3>Stage 1 - Swiss rounds</h3>
            <p>
                During this stage, every week, each player will be paired with another player for a bingo match.
                This pairing is calculated according to the points you have gathered so far, meaning you will
                play against people with similar scores. There will be <b>4</b> of these rounds.
            </p>

            <ul>
                <li>Each rounds starts on <b>Monday, 4pm UTC</b> and lasts one week</li>
                <li>You get <b>3 points</b> for a win, <b>1 point</b> for a draw and <b>0</b> points for a loss, forfeit or no show</li>
                <li>A forfeit (or no show) will be counted as a 4:00:00 time</li>
                <li>Ties are broken as follows, in this order:
                        <ul>
                        <li>Players with <b>a lower median</b> over their tourney times (incl 4:00:00 forfeit times) get priority, then</li>
                        <li>Players with <b>fewer forfeits</b> get priority, then</li>
                        <li>Players that are still tied, race a best of three on shorter bingo</li>
                    </ul>
                </li>
                <li>The top 13 players (based on tournament rank) will advance to the bracket phase.</li>
                <li>In addition, the top 3 of the remaining players based on tourney median time will advance.</li>

            
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
                            <td>Jun 6th</td>
                            <td>Sign up opens</td>
                        </tr>
                        <tr>
                            <td>Jun 21st</td>
                            <td>Sign up closes</td>
                        </tr>
                        <tr>
                            <td>Jul 5th</td>
                            <td>Start of Stage 1</td>
                        </tr>
                        <tr>
                            <td>Aug 2nd</td>
                            <td>Start of Stage 2</td>
                        </tr>
                        <tr>
                            <td>Aug 30th</td>
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