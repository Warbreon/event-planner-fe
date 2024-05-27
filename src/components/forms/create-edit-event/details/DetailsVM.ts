import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchTags } from "../../../../redux/slices/TagsSlice";
import { AppDispatch } from "../../../../redux/store/Store";

const DetailsVM = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const tags = useSelector((state: any) => state.tags.list);

    const eventTagsOptions = tags.map(tag => ({
        value: tag.id,
        label: tag.name
    }));

    return { eventTagsOptions }
}

export default DetailsVM