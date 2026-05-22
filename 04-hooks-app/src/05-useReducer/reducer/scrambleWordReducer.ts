
export interface ScrambleWordState {
    currentWord: string;
    errorCount: number;
    guess: string;
    isGameOver: boolean;
    maxAllowedErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;

}

export type ScrambleWordAction = |
{ type: 'SET_GUESS'; payload: string } |
{ type: 'CHECK_GUESS' } |
{ type: 'SKIP_WORD' } |
{ type: 'PLAY_AGAIN', payload: ScrambleWordState };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];


// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambleWordState => {
    const shuffleWords = shuffleArray(GAME_WORDS);
    const currentWord = shuffleWords[0];
    return {
        currentWord,
        errorCount: 0,
        guess: '',
        isGameOver: false,
        maxAllowedErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(currentWord),
        skipCounter: 0,
        words: shuffleWords,
        totalWords: shuffleWords.length,
    }
}



export const scrambleWordReducer = (state: ScrambleWordState, action: ScrambleWordAction): ScrambleWordState => {

    switch (action.type) {
        case 'SET_GUESS': {
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            }
        }
        case 'CHECK_GUESS': {
            if (state.currentWord === state.guess) {
                const newWords = state.words.filter(word => word !== state.currentWord);
                return {
                    ...state,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                    words: newWords,
                }
            }
            return {
                ...state,
                errorCount: state.errorCount + 1,
                guess: '',
                isGameOver: state.errorCount + 1 >= state.maxAllowedErrors,
            }
        }
        case 'SKIP_WORD': {

            if (state.skipCounter >= state.maxSkips) {
                return state; // No hacer nada si ya se alcanzó el límite de skips
            }

            const updatedWords = state.words.filter(word => word !== state.currentWord);
            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                words: updatedWords,
                guess: '',
            }
        }

        case 'PLAY_AGAIN': {
            return action.payload;
        }

        default:
            return state;
    }
}