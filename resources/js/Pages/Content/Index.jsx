import { memo } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

function Content({ onIncrease }) {
    // example optimize memory
    
    return (
        <>
            <PrimaryButton onClick={onIncrease} className="ms-4">
            Click to increase number
            </PrimaryButton>
        </>
    );
}

export default memo(Content)
