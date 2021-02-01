import React, { useReducer, useEffect } from 'react';
import CricketContext from './cricketContext';
import CricketReducer from './cricketReducer';

import {
    SET_BATSMAN,
    SET_STRIKER,
    SET_NONSTRIKER,
    SET_IS_STRIKER_OUT,
    SET_BOWLER,
    SET_TEAMS,
    SET_TEAMS_PLAYER,
    SET_NEXT_BATSMAN_ARRAY,
    SET_NEXT_BOWLER_ARRAY,
    SET_HOMETEAM_BAT_SC_ARRAY,
    SET_AWAYTEAM_BAT_SC_ARRAY,
    SET_HOMETEAM_BOWL_SC_ARRAY,
    SET_AWAYTEAM_BOWL_SC_ARRAY,
    SET_BOWLER_CHANGED_STATUS,
    SET_SWAP,
    SET_TOSS,
    SET_OPTED,
    SET_OVERS,
    TOGGLE_OVER_COMPLETED,
    SET_OVERSBOWLED,
    SET_BALLCOUNT,
    SET_PLAYER_PER_TEAM,
    RUN_BUTTON,
    SET_WIDE_CHECKED,
    SET_NO_CHECKED,
    SET_BYE_CHECKED,
    SET_LEGBYE_CHECKED,
    SET_WICKET_CHECKED,
    SET_FREEHIT,
    WICKET_FALLEN,
    SET_WICKET_TYPE_STATUS,
    SET_WICKET_TYPE,
    SET_BATSMAN_NO,
    SET_BOWLER_NO,
    SET_SHOW_WHO_HELPED_BUTTON,
    SET_HELPED_BY,
    SET_SHOW_NEXT_BATSMAN_BUTTON,
    SET_SHOW_NEXT_BOWLER_BUTTON,
    SET_SHOW_SECOND_INNING_BUTTON,
    SET_FIRST_INNING_INFO,
    SET_SECOND_INNING_INFO,
    SET_FIRST_INNING,
    SET_SECOND_INNING,
    SET_THINGS_FOR_SI,
    SET_WINNER,
    SET_IS_MATCH_FINISHED,
    CLEAR_ALERT,
    SHOW_OPENERS_MODAL,
    SHOW_BATSMAN_CHANGE_MODAL,
    SHOW_BOWLER_CHANGE_MODAL,
    SHOW_TERMINATE_MATCH_MODAL,
    SHOW_WICKET_TYPE_MODAL,
    SHOW_THEME_MODAL,
    OLD_MATCH_EXISTS,
    HAS_MATCH_SET_UP,
    SET_PARTNERSHIP,
    SET_PARTNERSHIP_BALLS,
    TERMINATE_MATCH
} from '../types';

const CricketState = (props) => {



    const initialState = {
        striker: {},
        nonStriker: {},
        bowler: {},
        isStrikerOut: true,
        swap: false,
        homeTeam: 'Mumbai',
        awayTeam: 'Chennai',
        homeTeamPlayer: [
            {
                id: 'homePlayer1',
                name: 'Shaibaz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'homePlayer2',
                name: 'Salman',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'homePlayer3',
                name: 'Fahad',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'homePlayer4',
                name: 'Maaz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'homePlayer5',
                name: 'Ali',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            }, {
                id: 'homePlayer6',
                name: 'Anas',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'homePlayer7',
                name: 'Faiz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            }
        ],
        awayTeamPlayer: [
            {
                id: 'awayPlayer1',
                name: 'Pawan',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'awayPlayer2',
                name: 'Danish',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'awayPlayer3',
                name: 'Rakib',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'awayPlayer4',
                name: 'Rahul',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'awayPlayer5',
                name: 'Kamal',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            }, {
                id: 'awayPlayer6',
                name: 'Prabhu',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            },
            {
                id: 'awayPlayer7',
                name: 'Jinu',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false,
                didBat: false
            }
        ],
        nextBatsmanArray: [
            {
                id: 'homePlayer1',
                name: 'Shaibaz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'homePlayer2',
                name: 'Salman',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'homePlayer3',
                name: 'Fahad',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'homePlayer4',
                name: 'Maaz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'homePlayer5',
                name: 'Ali',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            }, {
                id: 'homePlayer6',
                name: 'Anas',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'homePlayer7',
                name: 'Faiz',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            }
        ],
        nextBowlerArray: [
            {
                id: 'awayPlayer1',
                name: 'Pawan',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'awayPlayer2',
                name: 'Danish',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'awayPlayer3',
                name: 'Rakib',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'awayPlayer4',
                name: 'Rahul',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'awayPlayer5',
                name: 'Kamal',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            }, {
                id: 'awayPlayer6',
                name: 'Prabhu',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            },
            {
                id: 'awayPlayer7',
                name: 'Jinu',
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: '',
                isOut: false
            }
        ],
        homeTeamBatScorecardArray: [],
        awayTeamBatScorecardArray: [],
        homeTeamBowlScorecardArray: [],
        awayTeamBowlScorecardArray: [],
        bowlerChangedStatus: false,
        toss: 'home',
        optedTo: 'bat',
        overs: 7,
        oversBowled: 0,
        isOverCompleted: false,
        ballCount: 0,
        playerPerTeam: 5,
        teamTotal: 0,
        teamWicket: 0,
        freehit: false,
        wideChecked: false,
        noChecked: false,
        byeChecked: false,
        legByeChecked: false,
        wicketChecked: false,
        partnership: 0,
        partnershipBalls: 0,
        wicketTypeStatus: false,
        wicketType: '',
        batsmanNo: 0,
        bowlerNo: 0,
        helpedBy: '',
        firstInningInfo: {},
        secondInningInfo: {},
        showWhoHelpedButton: false,
        showNextBatsmanButton: false,
        showNextBowlerButton: false,
        showSecondInningButton: false,
        firstInning: true,
        secondInning: false,
        isMatchFinished: false,
        winner: null,
        alertMsg: null,
        alertType: 'danger',
        showOpenersModal: false,
        showBatsmanChangeModal: false,
        showBowlerChangeModal: false,
        showWicketTypeModal: false,
        showTerminateMatchModal: false,
        showThemeModal:false,
        terminateMatch: false,
        oldMatchExists: false,
        hasMatchSetUp: false


    }


    const [state, dispatch] = useReducer(CricketReducer, initialState, () => {
        const localData = localStorage.getItem('localState');
        return localData ? JSON.parse(localData) : initialState
    });

    useEffect(() => {
        if (!terminateMatch) {
            localStorage.setItem('localState', JSON.stringify(state));
        }
        // eslint-disable-next-line 
    }, [state, state.bowler, state.striker, state.nonStriker, state.ballCount, state.teamTotal])


    const { wideChecked, noChecked, byeChecked, legByeChecked, wicketChecked,
        teamTotal, teamWicket, homeTeam, playerPerTeam, bowler, terminateMatch,
        awayTeam, toss, optedTo, overs, swap, homeTeamPlayer, showTerminateMatchModal,
        awayTeamPlayer, oversBowled, ballCount, isOverCompleted, showNextBatsmanButton, partnershipBalls,
        freehit, batsmanNo, bowlerNo, homeTeamBatScorecardArray, wicketTypeStatus, partnership,
        awayTeamBatScorecardArray, homeTeamBowlScorecardArray, winner, wicketType, hasMatchSetUp,
        awayTeamBowlScorecardArray, showWhoHelpedButton, helpedBy, isMatchFinished, showOpenersModal,
        showBatsmanChangeModal, showBowlerChangeModal, showWicketTypeModal, oldMatchExists, showThemeModal,
        firstInning, striker, nonStriker, showSecondInningButton, firstInningInfo, secondInningInfo, isStrikerOut, secondInning } = state;


    var wicketVar = teamWicket;
    var ballCountVar = ballCount;
    var breakPartnership = false;
    var strikerCloneSC, strikerIndexSC, nonStrikerCloneSC, nonStrikerIndexSC, bowlerCloneSC, bowlerIndexSC, strikerClone, strikerIndex, nonStrikerClone, nonStrikerIndex, bowlerClone, bowlerIndex;
    // set team
    const setTeams = (teamName) => {
        dispatch({
            type: SET_TEAMS,
            payload: teamName
        })
    }

    // set toss
    const setToss = (toss) => {
        dispatch({
            type: SET_TOSS,
            payload: toss
        })
    }

    // set opted
    const setOptedTo = (optedTo) => {
        dispatch({
            type: SET_OPTED,
            payload: optedTo
        })
    }

    // set overs
    const setOvers = (overs) => {
        dispatch({
            type: SET_OVERS,
            payload: overs
        })
    }

    // set players per team
    const setPlayerPerTeam = (playerPerTeam) => {
        dispatch({
            type: SET_PLAYER_PER_TEAM,
            payload: playerPerTeam
        })
    }

    // Set Home and Away team players
    const setTeamsPlayer = (homePlayerArray, awayPlayerArray) => {
        dispatch({
            type: SET_TEAMS_PLAYER,
            payload: { homePlayerArray, awayPlayerArray }
        })
    }

    // set next batsman array
    const setNextBatsmanArray = (nextBatsmanArray) => {
        dispatch({
            type: SET_NEXT_BATSMAN_ARRAY,
            payload: nextBatsmanArray
        })
    }

    // set next bowler array
    const setNextBowlerArray = (nextBowlerArray) => {
        dispatch({
            type: SET_NEXT_BOWLER_ARRAY,
            payload: nextBowlerArray
        })
    }

    // Set Striker
    const setStriker = (striker) => {
        dispatch({
            type: SET_STRIKER,
            payload: striker
        })
    }

    // Set Nonsriker
    const setNonStriker = (nonStriker) => {
        dispatch({
            type: SET_NONSTRIKER,
            payload: nonStriker
        })
    }

    // Set Batsman
    const setBatsman = (striker, nonStriker) => {
        dispatch({
            type: SET_BATSMAN,
            payload: { striker, nonStriker }
        })
    }

    // Set Bowler
    const setBowler = (bowler) => {
        dispatch({
            type: SET_BOWLER,
            payload: bowler
        })
    }

    // SET BOWLER CHANGED STATUS
    const setBowlerChangedStatus = (bowlerChangedStatus) => {
        dispatch({
            type: SET_BOWLER_CHANGED_STATUS,
            payload: bowlerChangedStatus
        })
    }

    // RUN BUTTON
    const runButton = (val) => {
        let newTeamTotal;
        let newPartnership;
        let newPartnershipBalls;
        if (firstInning && !showNextBatsmanButton) {
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                strikerClone = cloneFunction(homeTeamPlayer, striker)[0];
                nonStrikerClone = cloneFunction(homeTeamPlayer, nonStriker)[0];
                bowlerClone = cloneFunction(awayTeamPlayer, bowler)[0];
                strikerIndex = homeTeamPlayer.indexOf(strikerClone);
                nonStrikerIndex = homeTeamPlayer.indexOf(nonStrikerClone);
                bowlerIndex = awayTeamPlayer.indexOf(bowlerClone);
                // division
                strikerCloneSC = cloneFunctionSC(homeTeamBatScorecardArray, striker)[0];
                nonStrikerCloneSC = cloneFunctionSC(homeTeamBatScorecardArray, nonStriker)[0];
                bowlerCloneSC = cloneFunctionSC(awayTeamBowlScorecardArray, bowler)[0];
                strikerIndexSC = homeTeamBatScorecardArray.indexOf(strikerCloneSC);
                nonStrikerIndexSC = homeTeamBatScorecardArray.indexOf(nonStrikerCloneSC);
                bowlerIndexSC = awayTeamBowlScorecardArray.indexOf(bowlerCloneSC);


            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                strikerClone = cloneFunction(awayTeamPlayer, striker)[0];
                nonStrikerClone = cloneFunction(awayTeamPlayer, nonStriker)[0];
                bowlerClone = cloneFunction(homeTeamPlayer, bowler)[0];
                strikerIndex = awayTeamPlayer.indexOf(strikerClone);
                nonStrikerIndex = awayTeamPlayer.indexOf(nonStrikerClone);
                bowlerIndex = homeTeamPlayer.indexOf(bowlerClone);
                // division
                strikerCloneSC = cloneFunctionSC(awayTeamBatScorecardArray, striker)[0];
                nonStrikerCloneSC = cloneFunctionSC(awayTeamBatScorecardArray, nonStriker)[0];
                bowlerCloneSC = cloneFunctionSC(homeTeamBowlScorecardArray, bowler)[0];
                strikerIndexSC = awayTeamBatScorecardArray.indexOf(strikerCloneSC);
                nonStrikerIndexSC = awayTeamBatScorecardArray.indexOf(nonStrikerCloneSC);
                bowlerIndexSC = homeTeamBowlScorecardArray.indexOf(bowlerCloneSC);
            }
        }
        else if (!firstInning && !showNextBatsmanButton) {
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                strikerClone = cloneFunction(homeTeamPlayer, striker)[0];
                nonStrikerClone = cloneFunction(homeTeamPlayer, nonStriker)[0];
                bowlerClone = cloneFunction(awayTeamPlayer, bowler)[0];
                strikerIndex = homeTeamPlayer.indexOf(strikerClone);
                nonStrikerIndex = homeTeamPlayer.indexOf(nonStrikerClone);
                bowlerIndex = awayTeamPlayer.indexOf(bowlerClone);
                // division
                strikerCloneSC = cloneFunctionSC(homeTeamBatScorecardArray, striker)[0];
                nonStrikerCloneSC = cloneFunctionSC(homeTeamBatScorecardArray, nonStriker)[0];
                bowlerCloneSC = cloneFunctionSC(awayTeamBowlScorecardArray, bowler)[0];
                strikerIndexSC = homeTeamBatScorecardArray.indexOf(strikerCloneSC);
                nonStrikerIndexSC = homeTeamBatScorecardArray.indexOf(nonStrikerCloneSC);
                bowlerIndexSC = awayTeamBowlScorecardArray.indexOf(bowlerCloneSC);

            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                strikerClone = cloneFunction(awayTeamPlayer, striker)[0];
                nonStrikerClone = cloneFunction(awayTeamPlayer, nonStriker)[0];
                bowlerClone = cloneFunction(homeTeamPlayer, bowler)[0];
                strikerIndex = awayTeamPlayer.indexOf(strikerClone);
                nonStrikerIndex = awayTeamPlayer.indexOf(nonStrikerClone);
                bowlerIndex = homeTeamPlayer.indexOf(bowlerClone);
                // division
                strikerCloneSC = cloneFunctionSC(awayTeamBatScorecardArray, striker)[0];
                nonStrikerCloneSC = cloneFunctionSC(awayTeamBatScorecardArray, nonStriker)[0];
                bowlerCloneSC = cloneFunctionSC(homeTeamBowlScorecardArray, bowler)[0];
                strikerIndexSC = awayTeamBatScorecardArray.indexOf(strikerCloneSC);
                nonStrikerIndexSC = awayTeamBatScorecardArray.indexOf(nonStrikerCloneSC);
                bowlerIndexSC = homeTeamBowlScorecardArray.indexOf(bowlerCloneSC);
            }
        }

        // no legbye wicket
        if (noChecked && legByeChecked && wicketChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
                return;
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.wicketTypeStatus) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        else if (state.wicketType === 'catchOut') {
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        if (state.wicketType === 'catchOut') {
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setNoChecked(false);
                setByeChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert()
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
            setLegByeChecked(false);
            setWicketChecked(false);
        }

        // no bye wicket
        else if (noChecked && byeChecked && wicketChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert()
                return;
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.wicketTypeStatus) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        else if (state.wicketType === 'catchOut') {
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        if (state.wicketType === 'catchOut') {
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setNoChecked(false);
                setByeChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert()
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
            setByeChecked(false);
            setWicketChecked(false);
        }

        // wide wicket
        else if (wideChecked && wicketChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert()
                return;
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.wicketTypeStatus) {
                setPartnership();
                wicketFallen();
                state.bowler.maidenCount = 0;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    if (freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val) + 1;
                        newPartnership = partnership + parseInt(val) + 1;
                        state.bowler.runConceded += parseInt(val) + 1;
                    }
                    else {
                        newTeamTotal = teamTotal + 1;
                        newPartnership = partnership + 1;
                        state.bowler.runConceded += 1;
                    }
                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val) + 1;
                        newPartnership = partnership + parseInt(val) + 1;
                        state.bowler.runConceded += parseInt(val) + 1;
                    }
                    else {
                        newTeamTotal = teamTotal + 1;
                        newPartnership = partnership + 1;
                        state.bowler.runConceded += 1;
                    }
                }
                if (state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        striker.isOut = true;
                    }
                }
                else if (!state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        nonStriker.isOut = true;
                    }
                }

                if ((val === '1' || val === '3' || val === '5') && (freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker')) {
                    setSwap(swap);
                }
                if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                    setShowNextBatsmanButton(true);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setWideChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert();
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
        }

        // no wicket
        else if (noChecked && wicketChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert()
                return;
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.wicketTypeStatus) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.runScored += parseInt(val);
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        else if (state.wicketType === 'catchOut') {
                            state.striker.runScored += parseInt(val);
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.striker.runScored += parseInt(val);
                            state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (!state.isStrikerOut) {
                        if (state.wicketType === 'runOutStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.runScored += parseInt(val);
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                nonStriker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                        if (state.wicketType === 'catchOut') {
                            state.nonStriker.runScored += parseInt(val);
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                        }
                    }
                    else if (state.isStrikerOut) {
                        if (state.wicketType === 'runOutNonStriker') {
                            setPartnership();
                            wicketFallen();
                            state.nonStriker.runScored += parseInt(val);
                            state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                            newTeamTotal = teamTotal + parseInt(val) + 1;
                            newPartnership = partnership + parseInt(val) + 1;
                            if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                                striker.isOut = true;
                                setShowNextBatsmanButton(true);
                            }
                        }
                    }
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setNoChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert()
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
            setWicketChecked(false);
        }

        // no bye
        else if (noChecked && byeChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
            setByeChecked(false);
        }

        // no legbye
        else if (noChecked && legByeChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
            setLegByeChecked(false);
        }

        // bye wicket
        else if (byeChecked && wicketChecked) {
            if (state.wicketTypeStatus) {
                setBowlerChangedStatus(false);
                setPartnership();
                wicketFallen();
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                if (!swap) {
                    state.striker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)

                }
                if (state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        striker.isOut = true;
                    }
                }
                else if (!state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        nonStriker.isOut = true;
                    }
                }

                state.bowler.ballsBowled += 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                setOversBowled();
                if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                    setShowNextBatsmanButton(true);
                }
                if ((val === '1' || val === '3' || val === '5') && (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker')) {
                    setSwap(swap);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setByeChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert();
            }
        }

        // legbye wicket
        else if (legByeChecked && wicketChecked) {
            if (state.wicketTypeStatus) {
                setBowlerChangedStatus(false);
                setPartnership();
                wicketFallen();
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                if (!swap) {
                    state.striker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)

                }
                if (state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        striker.isOut = true;
                    }
                }
                else if (!state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        nonStriker.isOut = true;
                    }
                }

                state.bowler.ballsBowled += 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                setOversBowled();
                if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                    setShowNextBatsmanButton(true);
                }
                if ((val === '1' || val === '3' || val === '5') && (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker')) {
                    setSwap(swap);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
                setLegByeChecked(false);
            }

            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert();
            }
        }

        // wide
        else if (wideChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setWideChecked(false)
        }

        // no 
        else if (noChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert()
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setFreehit(true);
                state.bowler.maidenCount = 0;
                // setBowlerChangedStatus(false)
                newTeamTotal = teamTotal + parseInt(val) + 1;
                newPartnership = partnership + parseInt(val) + 1;
                newPartnershipBalls = partnershipBalls + 1;
                state.bowler.runConceded += parseInt(val) + 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    if (val === '4') {
                        state.striker.fours += 1;
                    }
                    else if (val === '6') {
                        state.striker.sixes += 1;
                    }
                    state.striker.runScored += parseInt(val);
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    if (val === '4') {
                        state.nonStriker.fours += 1;
                    }
                    else if (val === '6') {
                        state.nonStriker.sixes += 1;
                    }
                    state.nonStriker.runScored += parseInt(val);
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setNoChecked(false);
        }

        //  bye
        else if (byeChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setBowlerChangedStatus(false);
                setFreehit(false);
                newTeamTotal = teamTotal + parseInt(val);
                newPartnership = partnership + parseInt(val);
                newPartnershipBalls = partnershipBalls + 1;
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                state.bowler.ballsBowled += 1;
                state.bowler.runConceded += parseInt(val);
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }
                setOversBowled();

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setByeChecked(false);
        }

        // legbye
        else if (legByeChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setBowlerChangedStatus(false)
                setFreehit(false);
                newTeamTotal = teamTotal + parseInt(val);
                newPartnership = partnership + parseInt(val);
                newPartnershipBalls = partnershipBalls + 1;
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                state.bowler.ballsBowled += 1;
                state.bowler.runConceded += parseInt(val);
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }
                setOversBowled();

                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First.';
                    clearAlert();
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()
                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
                state.bowler.maidenCount = 0;
            }
            setLegByeChecked(false)
        }
        // wicket
        else if (wicketChecked) {
            if (state.wicketTypeStatus) {
                setPartnership();
                wicketFallen();
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                if (!swap) {
                    state.striker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        striker.runScored += parseInt(val);
                    }
                    state.striker.strikeRate = ((striker.runScored) * 100 / (striker.balls)).toFixed(2)
                }
                else if (swap) {
                    nonStriker.balls += 1;
                    if (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        nonStriker.runScored += parseInt(val);
                    }
                    nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (nonStriker.balls)).toFixed(2)
                }
                if (state.isStrikerOut) {
                    if (!freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') {
                        striker.isOut = true;
                    }
                    if (freehit || state.wicketType === 'runOutStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                }
                else if (!state.isStrikerOut) {
                    if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                        nonStriker.isOut = true;
                    }
                    if (freehit || state.wicketType === 'runOutNonStriker') {
                        newTeamTotal = teamTotal + parseInt(val);
                        newPartnership = partnership + parseInt(val);
                        newPartnershipBalls = partnershipBalls + 1;
                        state.bowler.runConceded += parseInt(val);
                    }
                }
                state.bowler.ballsBowled += 1;
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                setOversBowled();
                if (!freehit || state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                    setShowNextBatsmanButton(true);
                }
                setWicketTypeStatus(false);
                setWicketChecked(false);
            }
            else {
                state.alertMsg = 'Please Select Wicket Type First.';
                clearAlert();
            }
            if ((val === '1' || val === '3' || val === '5') && (freehit || wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker')) {
                setSwap(swap);
            }
        }


        // only run button
        else if (!wideChecked && !noChecked && !byeChecked && !legByeChecked && !wicketChecked) {
            if (state.showNextBatsmanButton) {
                state.alertMsg = 'Please Select Next Batsman First.';
                clearAlert();

            }
            if (state.bowlerChangedStatus) {
                state.bowler.maidenCount = 0;
            }
            if ((!oversBowled.toString().endsWith('.0') || state.bowlerChangedStatus) && state.alertMsg === null) {
                setBowlerChangedStatus(false);
                setFreehit(false);
                newTeamTotal = teamTotal + parseInt(val);
                newPartnership = partnership + parseInt(val);
                newPartnershipBalls = partnershipBalls + 1;
                if (val === '0') {
                    state.bowler.maidenCount += 1;
                }
                if (state.bowler.maidenCount === 6) {
                    state.bowler.maidens += 1;
                }
                state.bowler.ballsBowled += 1;
                state.bowler.runConceded += parseInt(val);
                state.bowler.overs = `${Math.floor(state.bowler.ballsBowled / 6)}.${(state.bowler.ballsBowled % 6)}`;
                state.bowler.economyRate = (((state.bowler.runConceded) * 6) / (state.bowler.ballsBowled)).toFixed(2);
                if (!swap) {
                    if (val === '4') {
                        state.striker.fours += 1;
                    }
                    else if (val === '6') {
                        state.striker.sixes += 1;
                    }
                    state.striker.runScored += parseInt(val);
                    state.striker.balls += 1;
                    state.striker.strikeRate = ((state.striker.runScored) * 100 / (state.striker.balls)).toFixed(2)

                }
                else if (swap) {
                    if (val === '4') {
                        state.nonStriker.fours += 1;
                    }
                    else if (val === '6') {
                        state.nonStriker.sixes += 1;
                    }
                    state.nonStriker.runScored += parseInt(val);
                    state.nonStriker.balls += 1;
                    state.nonStriker.strikeRate = ((state.nonStriker.runScored) * 100 / (state.nonStriker.balls)).toFixed(2)
                }
                setOversBowled();
                if (val === '1' || val === '3' || val === '5') {
                    setSwap(swap);
                }
            }
            else {
                if (state.showNextBatsmanButton) {
                    state.alertMsg = 'Please Select Next Batsman First'
                }
                else {
                    state.alertMsg = 'Please Select Next Bowler First.';
                    clearAlert()

                }
            }
            if (oversBowled.toString().endsWith('.0')) {
                setShowNextBowlerButton(true);
            }
        }
        else {
            return;
        }
        // start
        if ((Math.floor(ballCountVar / 6) === overs) || (!firstInning && newTeamTotal > firstInningInfo.totalRunScored) || (!firstInning && wicketVar === (playerPerTeam - 1))) {
            if (firstInning) {
                if (isStrikerOut && wicketTypeStatus && wicketChecked) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                }
                else if (!isStrikerOut && wicketTypeStatus && wicketChecked) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                }
                setShowSecondInningButton(true);
                setFirstInning(false);
                setShowNextBatsmanButton(false);
                setShowNextBowlerButton(false);
                setBowlerChangedStatus(true)
                setWicketType(false)
            }
            else if (!firstInning) {
                if (isStrikerOut && wicketTypeStatus && wicketChecked) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                }
                else if (!isStrikerOut && wicketTypeStatus && wicketChecked) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                }

                if (wicketVar === (playerPerTeam - 1) && (newTeamTotal > firstInningInfo.totalRunScored)) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('away');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('home');
                    }
                    setIsMatchFinished(true);
                }

                else if (wicketVar === (playerPerTeam - 1) && (newTeamTotal < firstInningInfo.totalRunScored)) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('home');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('away');
                    }
                    setIsMatchFinished(true);
                }
                else if (wicketVar === (playerPerTeam - 1) && (newTeamTotal === firstInningInfo.totalRunScored)) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('draw');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('draw');
                    }
                    setIsMatchFinished(true);
                }

                // break
                else if (newTeamTotal > firstInningInfo.totalRunScored) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('away');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('home');
                    }
                    setIsMatchFinished(true);
                }
                else if (newTeamTotal < firstInningInfo.totalRunScored) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('home');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('away');
                    }
                    setIsMatchFinished(true);
                }
                else if (newTeamTotal === firstInningInfo.totalRunScored) {
                    if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                        setWinner('draw');
                    }
                    else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                        setWinner('draw');
                    }
                    setIsMatchFinished(true);
                }
                setIsMatchFinished(true);
                setShowNextBatsmanButton(false);
                setShowNextBowlerButton(false);
                setBowlerChangedStatus(true)
                setWicketType(false);
            }
        }
        if (firstInning && !showNextBatsmanButton) {
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                homeTeamPlayer[strikerIndex] = striker;
                homeTeamPlayer[nonStrikerIndex] = nonStriker;
                awayTeamPlayer[bowlerIndex] = bowler;
                // division
                homeTeamBatScorecardArray[strikerIndexSC] = striker;
                homeTeamBatScorecardArray[nonStrikerIndexSC] = nonStriker;
                awayTeamBowlScorecardArray[bowlerIndexSC] = bowler;
            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                awayTeamPlayer[strikerIndex] = striker;
                awayTeamPlayer[nonStrikerIndex] = nonStriker;
                homeTeamPlayer[bowlerIndex] = bowler;
                // division
                awayTeamBatScorecardArray[strikerIndexSC] = striker;
                awayTeamBatScorecardArray[nonStrikerIndexSC] = nonStriker;
                homeTeamBowlScorecardArray[bowlerIndexSC] = bowler;
            }

        }
        else if (!firstInning && !showNextBatsmanButton) {
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                homeTeamPlayer[strikerIndex] = striker;
                homeTeamPlayer[nonStrikerIndex] = nonStriker;
                awayTeamPlayer[bowlerIndex] = bowler;
                // division
                homeTeamBatScorecardArray[strikerIndexSC] = striker;
                homeTeamBatScorecardArray[nonStrikerIndexSC] = nonStriker;
                awayTeamBowlScorecardArray[bowlerIndexSC] = bowler;
            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                awayTeamPlayer[strikerIndex] = striker;
                awayTeamPlayer[nonStrikerIndex] = nonStriker;
                homeTeamPlayer[bowlerIndex] = bowler;
                // division
                awayTeamBatScorecardArray[strikerIndexSC] = striker;
                awayTeamBatScorecardArray[nonStrikerIndexSC] = nonStriker;
                homeTeamBowlScorecardArray[bowlerIndexSC] = bowler;
            }

        }

        // setPartnership()

        // let newPartnership = teamTotal
        if (!breakPartnership) {
            dispatch({
                type: SET_PARTNERSHIP,
                payload: newPartnership === undefined ? partnership : newPartnership
            })

            dispatch({
                type: SET_PARTNERSHIP_BALLS,
                payload: newPartnershipBalls === undefined ? partnershipBalls : newPartnershipBalls
            })
        }


        // end
        dispatch({
            type: RUN_BUTTON,
            payload: newTeamTotal === undefined ? teamTotal : newTeamTotal
        })

        breakPartnership = false;
    }

    // set partnership
    const setPartnership = () => {
        breakPartnership = true
        dispatch({
            type: SET_PARTNERSHIP,
            payload: 0
        })


        dispatch({
            type: SET_PARTNERSHIP_BALLS,
            payload: 0
        })
    }

    // striker Clone
    const cloneFunctionSC = (SCArray, player) => {
        return SCArray.filter((sc) => {
            return sc.id === player.id;
        });
    }

    // clone function for team array
    const cloneFunction = (teamArray, player) => {
        return teamArray.filter((ta) => {
            return ta.id === player.id;
        });
    }

    // set ball count
    const setBallCount = () => {
        let newBallCount = ballCount + 1;
        ballCountVar = newBallCount;
        dispatch({
            type: SET_BALLCOUNT,
            payload: newBallCount
        })
    }

    // set Overs Bowled
    const setOversBowled = () => {
        setBallCount();
        let newOversBowled = `${Math.floor(ballCountVar / 6)}.${(ballCountVar % 6)}`;
        dispatch({
            type: SET_OVERSBOWLED,
            payload: newOversBowled
        })
    }

    // Over Completed
    const toggleOverCompleted = (isOverCompleted) => {
        dispatch({
            type: TOGGLE_OVER_COMPLETED,
            payload: !isOverCompleted
        })
    }

    // Set swap
    const setSwap = (swap) => {
        if (!wicketChecked) {
            dispatch({
                type: SET_SWAP,
                payload: !swap
            })
        }
    }

    // Fall of wicket
    const wicketFallen = () => {
        let newTeamWicket;
        if (!state.freehit) {
            newTeamWicket = teamWicket + 1;
            if (state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                state.bowler.wickets = state.bowler.wickets + 0;

            } else if (state.wicketType === 'bowled' || 'lbw' || 'catchOut' || 'stumping' || 'hitWicket') {
                state.bowler.wickets += 1;
            }
        }
        else if (state.freehit) {
            if (state.wicketType === 'runOutStriker' || state.wicketType === 'runOutNonStriker') {
                newTeamWicket = teamWicket + 1;
                if (!wideChecked) {
                    setFreehit(false);
                    
                }
            }
            else {
                newTeamWicket = teamWicket + 0;
                state.bowler.wickets = state.bowler.wickets + 0;
                if (!wideChecked) {
                    setFreehit(false);
                    
                }
            }

        }
        if (newTeamWicket === (playerPerTeam - 1)) {
            if (firstInning) {
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                }
                setShowSecondInningButton(true);
                setFirstInning(false);
                setShowNextBatsmanButton(false);
                setShowNextBowlerButton(false);
                setBowlerChangedStatus(true)
                setWicketType(false)
            }
            else if (!firstInning) {
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                }
                setIsMatchFinished(true);
                setShowNextBatsmanButton(false);
                setShowNextBowlerButton(false);
                setBowlerChangedStatus(true);
                setWicketType(false);
            }
        }
        wicketVar = newTeamWicket;
        dispatch({
            type: WICKET_FALLEN,
            payload: newTeamWicket
        })
    }

    // set wide
    const setWideChecked = (inp) => {
        dispatch({
            type: SET_WIDE_CHECKED,
            payload: inp
        })
    }

    // set no
    const setNoChecked = (inp) => {
        dispatch({
            type: SET_NO_CHECKED,
            payload: inp
        })
    }

    // set bye
    const setByeChecked = (inp) => {
        dispatch({
            type: SET_BYE_CHECKED,
            payload: inp
        })
    }

    // set legbye
    const setLegByeChecked = (inp) => {
        dispatch({
            type: SET_LEGBYE_CHECKED,
            payload: inp
        })
    }

    // set wicket checked
    const setWicketChecked = (inp) => {
        setWicketTypeStatus(false)
        dispatch({
            type: SET_WICKET_CHECKED,
            payload: inp
        })
    }

    // set freehit checked
    const setFreehit = (inp) => {
        dispatch({
            type: SET_FREEHIT,
            payload: inp
        })
    }

    // set isStrikerOut ... true-> striker is out ..false-> non striker is out
    const setIsStrikerOut = (trueFalse) => {
        dispatch({
            type: SET_IS_STRIKER_OUT,
            payload: trueFalse
        })
    }

    // SET wicket type status.....true-> wicketType has been selected from wicketType dropdown
    const setWicketTypeStatus = (trueFalse) => {
        dispatch({
            type: SET_WICKET_TYPE_STATUS,
            payload: trueFalse
        })
    }

    // SET wicket type 
    const setWicketType = (wicketType) => {
        dispatch({
            type: SET_WICKET_TYPE,
            payload: wicketType
        })
    }

    // set show next batsman button ...true-> show
    const setShowNextBatsmanButton = (trueFalse) => {
        dispatch({
            type: SET_SHOW_NEXT_BATSMAN_BUTTON,
            payload: trueFalse
        })
    }

    // set show next bowler button ...true-> show
    const setShowNextBowlerButton = (trueFalse) => {
        dispatch({
            type: SET_SHOW_NEXT_BOWLER_BUTTON,
            payload: trueFalse
        })
    }

    // set show who helped button ...true-> show
    const setShowWhoHelpedButton = (trueFalse) => {
        dispatch({
            type: SET_SHOW_WHO_HELPED_BUTTON,
            payload: trueFalse
        })
    }

    // set helped by
    const setHelpedBy = (whoHelped) => {
        dispatch({
            type: SET_HELPED_BY,
            payload: whoHelped
        })
    }

    // set batsman no. for scorecard 
    const setBatsmanNo = () => {
        let newBatsmanNo = batsmanNo + 1;

        dispatch({
            type: SET_BATSMAN_NO,
            payload: newBatsmanNo
        })
    }

    // set bowler no. for scorecard 
    const setBowlerNo = () => {
        let newBowlerNo = bowlerNo + 1;

        dispatch({
            type: SET_BOWLER_NO,
            payload: newBowlerNo
        })
    }

    // set home bat scorecard Array
    const setHomeBatSCArray = (player) => {
        homeTeamBatScorecardArray.push(player);
        dispatch({
            type: SET_HOMETEAM_BAT_SC_ARRAY,
            payload: homeTeamBatScorecardArray
        })
    }

    // set away bat scorecard Array
    const setAwayBatSCArray = (player) => {
        awayTeamBatScorecardArray.push(player);
        dispatch({
            type: SET_AWAYTEAM_BAT_SC_ARRAY,
            payload: awayTeamBatScorecardArray
        })
    }

    // set home bowl scorecard Array
    const setHomeBowlSCArray = (player) => {
        homeTeamBowlScorecardArray.push(player);
        dispatch({
            type: SET_HOMETEAM_BOWL_SC_ARRAY,
            payload: homeTeamBowlScorecardArray
        })
    }

    // set away bowl scorecard Array
    const setAwayBowlSCArray = (player) => {
        awayTeamBowlScorecardArray.push(player);
        dispatch({
            type: SET_AWAYTEAM_BOWL_SC_ARRAY,
            payload: awayTeamBowlScorecardArray
        })
    }

    // set first innings
    const setFirstInning = (trueFalse) => {
        dispatch({
            type: SET_FIRST_INNING,
            payload: trueFalse
        })
    }

    // set first innings
    const setSecondInning = (trueFalse) => {
        dispatch({
            type: SET_SECOND_INNING,
            payload: trueFalse
        })
    }

    // set show second inning button ...true-> show
    const setShowSecondInningButton = (trueFalse) => {
        dispatch({
            type: SET_SHOW_SECOND_INNING_BUTTON,
            payload: trueFalse
        })
    }

    // set things for second inning
    const setThingsForSI = () => {
        dispatch({
            type: SET_THINGS_FOR_SI
        })
        state.batsmanNo = 0;
        state.bowlerNo = 0;
        state.teamTotal = 0;
        state.teamWicket = 0;
        state.oversBowled = 0;
        state.ballCount = 0;
    }

    // set first inning info
    const setFirstInningInfo = () => {
        let firstInningObj = {}
        firstInningObj.totalRunScored = state.teamTotal;
        firstInningObj.wicketsLost = state.teamWicket;
        firstInningObj.oversPlayed = state.oversBowled;
        firstInningObj.ballsPlayed = state.ballCount;

        dispatch({
            type: SET_FIRST_INNING_INFO,
            payload: firstInningObj
        })
    }

    // set second inning info
    const setSecondInningInfo = () => {
        if (!firstInning) {
            let secondInningObj = {}
            secondInningObj.totalRunScored = state.teamTotal;
            secondInningObj.wicketsLost = state.teamWicket;
            secondInningObj.oversPlayed = state.oversBowled;
            secondInningObj.ballsPlayed = state.ballCount;

            dispatch({
                type: SET_SECOND_INNING_INFO,
                payload: secondInningObj
            })
        }

    }

    // set is match finished
    const setIsMatchFinished = (trueFalse) => {
        dispatch({
            type: SET_IS_MATCH_FINISHED,
            payload: trueFalse
        })
    }

    // set winner
    const setWinner = (winner) => {
        setFreehit(false);
        dispatch({
            type: SET_WINNER,
            payload: winner
        })
    }

    // clear alert
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 5000);
    }

    // Show openers modal
    const setShowOpenersModal = (trueFalse) => {
        dispatch({
            type: SHOW_OPENERS_MODAL,
            payload: trueFalse
        })
    }

    // Show openers modal
    const setShowBatsmanChangeModal = (trueFalse) => {
        dispatch({
            type: SHOW_BATSMAN_CHANGE_MODAL,
            payload: trueFalse
        })
    }


    // Show openers modal
    const setShowBowlerChangeModal = (trueFalse) => {
        dispatch({
            type: SHOW_BOWLER_CHANGE_MODAL,
            payload: trueFalse
        })
    }

    // Show openers modal
    const setShowWicketTypeModal = (trueFalse) => {
        dispatch({
            type: SHOW_WICKET_TYPE_MODAL,
            payload: trueFalse
        })
    }

    // Show terminate match modal
    const setShowTerminateMatchModal = (trueFalse) => {
        dispatch({
            type: SHOW_TERMINATE_MATCH_MODAL,
            payload: trueFalse
        })
    }

    // Show terminate match modal
    const setShowThemeModal = (trueFalse) => {
        dispatch({
            type: SHOW_THEME_MODAL,
            payload: trueFalse
        })
    }

    // set terminate match
    const setTerminateMatch = (trueFalse) => {
        dispatch({
            type: TERMINATE_MATCH,
            payload: trueFalse
        })
    }

    // Terminate the match
    const terminateMatchFunc = () => {
        localStorage.removeItem('localState');
        window.location.reload();
    }

    // set old match exists
    const setOldMatchExists = (trueFalse) => {
        dispatch({
            type: OLD_MATCH_EXISTS,
            payload: trueFalse
        })
    }

    // set has match set up
    const setHasMatchSetUp = (trueFalse) => {
        dispatch({
            type: HAS_MATCH_SET_UP,
            payload: trueFalse
        })
    }

    // theme function
    const setTheme = (color) => {
        if (color === 'purple') {
            document.documentElement.style.setProperty('--purple', '#5252a5');
        }
        else if (color === 'green') {
            document.documentElement.style.setProperty('--purple', '#009270');
        }
        else if (color === 'blue') {
            document.documentElement.style.setProperty('--purple', '#03a9f4');
        }
        else if (color === 'red') {
            document.documentElement.style.setProperty('--purple', '#dc3545');
        }
        else if (color === 'green') {
            document.documentElement.style.setProperty('--purple', '#009270');
        }
        else {
            // document.documentElement.style.setProperty('--purple', '#009270');
        }

    }


    return (
        <CricketContext.Provider value={{
            striker: state.striker,
            nonStriker: state.nonStriker,
            isStrikerOut: state.isStrikerOut,
            swap: swap,
            bowler: state.bowler,
            toss: toss,
            optedTo: optedTo,
            overs: overs,
            ballCount: state.ballCount,
            oversBowled: oversBowled,
            isOverCompleted: isOverCompleted,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            homeTeamPlayer: homeTeamPlayer,
            awayTeamPlayer: awayTeamPlayer,
            nextBatsmanArray: state.nextBatsmanArray,
            nextBowlerArray: state.nextBowlerArray,
            bowlerChangedStatus: state.bowlerChangedStatus,
            playerPerTeam: state.playerPerTeam,
            teamTotal: teamTotal,
            teamWicket: teamWicket,
            cRR: state.cRR,
            rRR: state.rRR,
            wideChecked: wideChecked,
            freehit: state.freehit,
            noChecked: noChecked,
            legByeChecked: legByeChecked,
            byeChecked: byeChecked,
            wicketChecked: wicketChecked,
            wicketTypeStatus: state.wicketTypeStatus,
            wicketType: state.wicketType,
            batsmanNo: batsmanNo,
            bowlerNo: bowlerNo,
            helpedBy: helpedBy,
            showWhoHelpedButton: showWhoHelpedButton,
            showNextBatsmanButton: state.showNextBatsmanButton,
            showNextBowlerButton: state.showNextBowlerButton,
            showSecondInningButton: showSecondInningButton,
            homeTeamBatScorecardArray: homeTeamBatScorecardArray,
            awayTeamBatScorecardArray: awayTeamBatScorecardArray,
            homeTeamBowlScorecardArray: homeTeamBowlScorecardArray,
            awayTeamBowlScorecardArray: awayTeamBowlScorecardArray,
            firstInning: firstInning,
            secondInning: secondInning,
            isMatchFinished: isMatchFinished,
            firstInningInfo: firstInningInfo,
            secondInningInfo: secondInningInfo,
            winner: winner,
            alertMsg: state.alertMsg,
            alertType: state.alertType,
            showOpenersModal: showOpenersModal,
            showBatsmanChangeModal: showBatsmanChangeModal,
            showBowlerChangeModal: showBowlerChangeModal,
            showWicketTypeModal: showWicketTypeModal,
            showTerminateMatchModal: showTerminateMatchModal,
            showThemeModal: showThemeModal,
            oldMatchExists: oldMatchExists,
            hasMatchSetUp: hasMatchSetUp,
            partnership: partnership,
            partnershipBalls: partnershipBalls,
            terminateMatch: terminateMatch,
            setToss,
            setOptedTo,
            setOvers,
            toggleOverCompleted,
            setPlayerPerTeam,
            setTeams,
            setTeamsPlayer,
            setNextBatsmanArray,
            setNextBowlerArray,
            setBowlerChangedStatus,
            setBatsman,
            setStriker,
            setNonStriker,
            setIsStrikerOut,
            setSwap,
            setBowler,
            runButton,
            setFreehit,
            setWideChecked,
            setNoChecked,
            setByeChecked,
            setLegByeChecked,
            setWicketChecked,
            wicketFallen,
            setWicketTypeStatus,
            setWicketType,
            setBatsmanNo,
            setBowlerNo,
            setHelpedBy,
            setShowWhoHelpedButton,
            setShowNextBatsmanButton,
            setShowNextBowlerButton,
            setShowSecondInningButton,
            setHomeBatSCArray,
            setAwayBatSCArray,
            setHomeBowlSCArray,
            setAwayBowlSCArray,
            setFirstInning,
            setSecondInning,
            setIsMatchFinished,
            setFirstInningInfo,
            setSecondInningInfo,
            setThingsForSI,
            setWinner,
            terminateMatchFunc,
            clearAlert,
            setShowOpenersModal,
            setShowBatsmanChangeModal,
            setShowBowlerChangeModal,
            setShowWicketTypeModal,
            setShowTerminateMatchModal,
            setShowThemeModal,
            setOldMatchExists,
            setHasMatchSetUp,
            setPartnership,
            setTerminateMatch,
            setTheme
        }}>
            {props.children}
        </CricketContext.Provider>
    )
};

export default CricketState;