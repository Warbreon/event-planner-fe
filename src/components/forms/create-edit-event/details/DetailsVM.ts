import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchTags } from "../../../../redux/slices/TagsSlice";
import { AppDispatch, StoreState } from "../../../../redux/store/Store";

const DetailsVM = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const { list: tags, error: tagsError } = useSelector((state: any) => state.tags);

    const eventTagsOptions = tags.map(tag => ({
        key: tag.id,
        label: tag.name
    }));

    return { 
        eventTagsOptions,
        tagsError
    }
}

export default DetailsVM