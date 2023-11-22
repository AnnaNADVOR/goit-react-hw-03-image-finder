import {Button} from './LoadMoreButton.styled'

function LoadMoreButton({ click }) {
    return (
        <Button onClick={click} type="button">
            Load more
        </Button>)
}

export default LoadMoreButton;