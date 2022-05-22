import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../store/actions/ui';

const useUI = () => {
    const dispatch = useDispatch();
    const {activePage} = useSelector(state => state.ui);
    const setPage = page => dispatch(setCurrentPage(page));

    return {
        activePage,
        setPage,
    };
};

export default useUI;
