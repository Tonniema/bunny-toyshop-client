import { useEffect } from "react";

const Title = (title) => {

    useEffect(() => {
        document.title = `${title} | Bunny Toyshop`
    }, [title])

};

export default Title;
