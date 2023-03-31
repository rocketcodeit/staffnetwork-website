import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {posts} from "../../pages/api/post/PostData";

export interface IBreadCrumbsMapLabel{
    originalPath : string,
    label : string
}

export interface IBreadCrumbsProps {
    mappedPaths : IBreadCrumbsMapLabel[]
    transformDynamicPath? : (path : string )  => string
    showHome? : boolean
    homeLabel? : string
}
export interface IBreadCrumbSegment {
    /***
     * only the path of a singular piece of URL
     * Example: article-2
     */
    path : string,
    /***
     *  concatened path element
     * Example: /post/article-2
     */

    url : string,
    /***
     * the path parameter name
     * Example: [slug]
     */
    pathName : string,
    /***
     * label to be rendered as breadcrumb
     * Example : titolo articolo 2
     */
    label : string,
    isHome : boolean,
    isDynamic : boolean

}
export default function BreadCrumbs(props : IBreadCrumbsProps){
    const router = useRouter()

    const [paths,setPaths] = useState<IBreadCrumbSegment[]>([]);

    useEffect(() => {
            const paths  = router.asPath.split("?")[0].split('/').filter(v => (v.length > 0 && props.showHome === false) || props.showHome );
        const pathNames = router.pathname.split('/').filter(v => (v.length > 0 && props.showHome === false) || props.showHome) ;


        const transformedPath = transformPath(paths,pathNames);
        setPaths(transformedPath);
    },[]);


    const transformPath = (paths : string[], pathNames : string[]) : IBreadCrumbSegment[] => {
        let newPaths : IBreadCrumbSegment[] = [];
        let url : string = "";

        newPaths = paths.map((p,i) => {
            url += url.endsWith('/') ? p : "/" + p;
            let finalPath = pathNames[i];

            const segment : IBreadCrumbSegment = {
                path : p,
                pathName : pathNames[i],
                url,
                label : p === '' ? props.homeLabel ?? "Home" : finalPath,
                isHome : p === '',
                isDynamic : pathNames[i].startsWith('[') && pathNames[i].endsWith(']')
            }

            const pathFound = props.mappedPaths.find(item => item.originalPath === segment.path);

            if(pathFound){
                segment.label = pathFound.label;
            }

            if(props.transformDynamicPath && !segment.isHome){
                segment.label = props.transformDynamicPath(segment.isDynamic ? segment.pathName : segment.label);
            }


            return segment
        })

        return newPaths;
    };


    return(
        <div className="breadCrumb">
            {
                /*paths.map((path,index) =>{
                    return (
                        <div key={index} className="breadCrumb__element">
                            <a  href={path.url}>{path.label}</a>
                        </div>
                        )

                })*/
            }
        </div>

    );
}