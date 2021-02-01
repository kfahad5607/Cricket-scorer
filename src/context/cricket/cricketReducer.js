import {
    SET_BATSMAN,
    SET_STRIKER,
    SET_IS_STRIKER_OUT,
    SET_NONSTRIKER,
    SET_BOWLER,
    SET_TOSS,
    SET_TEAMS_PLAYER,
    SET_NEXT_BATSMAN_ARRAY,
    SET_NEXT_BOWLER_ARRAY,
    SET_BOWLER_CHANGED_STATUS,
    SET_OPTED,
    SET_OVERS,
    SET_OVERSBOWLED,
    TOGGLE_OVER_COMPLETED,
    SET_BALLCOUNT,
    SET_PLAYER_PER_TEAM,
    SET_TEAMS,
    SET_SWAP,
    RUN_BUTTON,
    SET_FREEHIT,
    SET_WIDE_CHECKED,
    SET_NO_CHECKED,
    SET_BYE_CHECKED,
    SET_LEGBYE_CHECKED,
    SET_WICKET_CHECKED,
    WICKET_FALLEN,
    SET_WICKET_TYPE_STATUS,
    SET_WICKET_TYPE,
    SET_BATSMAN_NO,
    SET_BOWLER_NO,
    SET_HELPED_BY,
    SET_SHOW_WHO_HELPED_BUTTON,
    SET_SHOW_NEXT_BATSMAN_BUTTON,
    SET_SHOW_NEXT_BOWLER_BUTTON,
    SET_SHOW_SECOND_INNING_BUTTON,
    SET_HOMETEAM_BAT_SC_ARRAY,
    SET_AWAYTEAM_BAT_SC_ARRAY,
    SET_HOMETEAM_BOWL_SC_ARRAY,
    SET_AWAYTEAM_BOWL_SC_ARRAY,
    SAVE_HOMETEAM_BAT_SC_ARRAY,
    SET_FIRST_INNING,
    SET_SECOND_INNING,
    SET_FIRST_INNING_INFO,
    SET_SECOND_INNING_INFO,
    SET_THINGS_FOR_SI,
    SET_IS_MATCH_FINISHED,
    SET_WINNER,
    CLEAR_ALERT,
    SHOW_OPENERS_MODAL,
    SHOW_BATSMAN_CHANGE_MODAL,
    SHOW_BOWLER_CHANGE_MODAL,
    SHOW_WICKET_TYPE_MODAL,
    SHOW_TERMINATE_MATCH_MODAL,
    SHOW_THEME_MODAL,
    OLD_MATCH_EXISTS,
    HAS_MATCH_SET_UP,
    SET_PARTNERSHIP,
    SET_PARTNERSHIP_BALLS,
    TERMINATE_MATCH
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return {
                ...state,
                homeTeam: action.payload.hostTeam,
                awayTeam: action.payload.visitorTeam
            }
        case SET_STRIKER:
            return {
                ...state,
                striker: action.payload
            }
        case SET_NONSTRIKER:
            return {
                ...state,
                nonStriker: action.payload
            }
        case SET_IS_STRIKER_OUT:
            return {
                ...state,
                isStrikerOut: action.payload
            }
        case SET_TOSS:
            return {
                ...state,
                toss: action.payload
            }
        case SET_OPTED:
            return {
                ...state,
                optedTo: action.payload
            }
        case SET_OVERSBOWLED:
            return {
                ...state,
                oversBowled: action.payload
            }
        case SET_OVERS:
            return {
                ...state,
                overs: action.payload
            }
        case TOGGLE_OVER_COMPLETED:
            return {
                ...state,
                isOverCompleted: action.payload
            }
        case SET_BALLCOUNT:
            return {
                ...state,
                ballCount: action.payload
            }
        case SET_PLAYER_PER_TEAM:
            return {
                ...state,
                playerPerTeam: action.payload
            }
        case SET_TEAMS_PLAYER:
            return {
                ...state,
                homeTeamPlayer: action.payload.homePlayerArray,
                awayTeamPlayer: action.payload.awayPlayerArray
            }
        case SET_NEXT_BATSMAN_ARRAY:
            return {
                ...state,
                nextBatsmanArray: action.payload
            }
        case SET_NEXT_BOWLER_ARRAY:
            return {
                ...state,
                nextBowlerArray: action.payload
            }
        case SET_BOWLER_CHANGED_STATUS:
            return {
                ...state,
                bowlerChangedStatus: action.payload
            }
        case SET_BATSMAN:
            return {
                ...state,
                striker: action.payload.striker,
                nonStriker: action.payload.nonStriker
            }
        case SET_SWAP:
            return {
                ...state,
                swap: action.payload
            }
        case SET_BOWLER:
            return {
                ...state,
                bowler: action.payload
            }
        case RUN_BUTTON:
            return {
                ...state,
                teamTotal: action.payload
            }
        case SET_FREEHIT:
            return {
                ...state,
                freehit: action.payload
            }
        case SET_WIDE_CHECKED:
            return {
                ...state,
                wideChecked: action.payload
            }
        case SET_NO_CHECKED:
            return {
                ...state,
                noChecked: action.payload
            }
        case SET_BYE_CHECKED:
            return {
                ...state,
                byeChecked: action.payload
            }
        case SET_LEGBYE_CHECKED:
            return {
                ...state,
                legByeChecked: action.payload
            }
        case SET_WICKET_CHECKED:
            return {
                ...state,
                wicketChecked: action.payload
            }
        case WICKET_FALLEN:
            return {
                ...state,
                teamWicket: action.payload
            }
        case SET_WICKET_TYPE_STATUS:
            return {
                ...state,
                wicketTypeStatus: action.payload
            }
        case SET_WICKET_TYPE:
            return {
                ...state,
                wicketType: action.payload
            }
        case SET_BATSMAN_NO:
            return {
                ...state,
                batsmanNo: action.payload
            }
        case SET_BOWLER_NO:
            return {
                ...state,
                bowlerNo: action.payload
            }
        case SET_HELPED_BY:
            return {
                ...state,
                helpedBy: action.payload
            }
        case SET_SHOW_WHO_HELPED_BUTTON:
            return {
                ...state,
                showWhoHelpedButton: action.payload
            }
        case SET_SHOW_NEXT_BATSMAN_BUTTON:
            return {
                ...state,
                showNextBatsmanButton: action.payload
            }
        case SET_SHOW_NEXT_BOWLER_BUTTON:
            return {
                ...state,
                showNextBowlerButton: action.payload
            }
        case SET_SHOW_SECOND_INNING_BUTTON:
            return {
                ...state,
                showSecondInningButton: action.payload
            }
        case SET_HOMETEAM_BAT_SC_ARRAY:
            return {
                ...state,
                homeTeamBatScorecardArray: action.payload
            }
        case SET_AWAYTEAM_BAT_SC_ARRAY:
            return {
                ...state,
                awayTeamBatScorecardArray: action.payload
            }
        case SET_HOMETEAM_BOWL_SC_ARRAY:
            return {
                ...state,
                homeTeamBowlScorecardArray: action.payload
            }
        case SET_AWAYTEAM_BOWL_SC_ARRAY:
            return {
                ...state,
                awayTeamBowlScorecardArray: action.payload
            }
        case SET_FIRST_INNING:
            return {
                ...state,
                firstInning: action.payload
            }
        case SET_SECOND_INNING:
            return {
                ...state,
                secondInning: action.payload
            }
        case SET_FIRST_INNING_INFO:
            return {
                ...state,
                firstInningInfo: action.payload
            }
        case SET_THINGS_FOR_SI:
            return {
                ...state,
                batsmanNo: 0,
                bowlerNo: 0,
                teamTotal: 0,
                teamWicket: 0,
                oversBowled: 0,
                ballCount: 0
            }
        case SET_SECOND_INNING_INFO:
            return {
                ...state,
                secondInningInfo: action.payload
            }
        case SET_IS_MATCH_FINISHED:
            return {
                ...state,
                isMatchFinished: action.payload
            }
        case CLEAR_ALERT:
            return {
                ...state,
                alertMsg: null
            }
        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }
        case SAVE_HOMETEAM_BAT_SC_ARRAY:
            return {
                ...state,
                homeTeamBatScorecardArray: action.payload
            }
        case SHOW_OPENERS_MODAL:
            return {
                ...state,
                showOpenersModal: action.payload
            }
        case SHOW_BATSMAN_CHANGE_MODAL:
            return {
                ...state,
                showBatsmanChangeModal: action.payload
            }
        case SHOW_BOWLER_CHANGE_MODAL:
            return {
                ...state,
                showBowlerChangeModal: action.payload
            }
        case SHOW_WICKET_TYPE_MODAL:
            return {
                ...state,
                showWicketTypeModal: action.payload
            }
        case SHOW_TERMINATE_MATCH_MODAL:
            return {
                ...state,
                showTerminateMatchModal: action.payload
            }
        case SHOW_THEME_MODAL:
            return {
                ...state,
                showThemeModal: action.payload
            }
        case OLD_MATCH_EXISTS:
            return {
                ...state,
                oldMatchExists: action.payload
            }
        case HAS_MATCH_SET_UP:
            return {
                ...state,
                hasMatchSetUp: action.payload
            }
        case SET_PARTNERSHIP:
            return {
                ...state,
                partnership: action.payload
            }
        case SET_PARTNERSHIP_BALLS:
            return {
                ...state,
                partnershipBalls: action.payload
            }
        case TERMINATE_MATCH:
            return {
                ...state,
                terminateMatch: action.payload
            }
        default:
            return state;
    }
}