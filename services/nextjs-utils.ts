export class NextjsUtils {
    public static returnNotFoundObject(): any {
        return {
            notFound: true
        }
    }

    public static returnRedirectObject(destination: string): any {
        return {
            redirect: {
                permanent: false,
                destination: "/blog",
            }
        };
    }

    public static returnServerSidePropsObject(props: any): {props: {}} {
        return {
            props: {
                ...props
            }
        };
    }
}
