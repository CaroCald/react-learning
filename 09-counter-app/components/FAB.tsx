import { Text, Pressable, StyleSheet } from 'react-native'

interface FabProps {
    label: string
    position?: 'left' | 'right'
    onPress?: () => void
    onLongPress?: () => void
}
export default function Fab({ label, onPress, onLongPress, position = 'left' }: FabProps) {
    return (
        <Pressable

            style={({ pressed }) => [
                styles.floatingButton,
                position === 'right' ?
                    styles.positionRight :
                    styles.positionLeft,
                pressed ? { opacity: 0.5 } : { opacity: 1 }

            ]}
            onPress={
                onPress
            }
            onLongPress={
                onLongPress
            }

        >
            <Text style={{ color: 'white' }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 10,
        borderRadius: 50,

    },
    positionRight: {
        right: 20
    },
    positionLeft: {
        left: 20
    }
});