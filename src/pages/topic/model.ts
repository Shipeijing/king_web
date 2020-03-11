import { useRequest } from '@umijs/hooks';
export default {
    namespace: "topIc",
    state: {
        dataList: []
    },
    reducers: {

    },
    effects: {
        addAfter1Second() {
            const { data, error, loading } = useRequest({
                url: '/api/changeUsername',
                method: 'post',
                data: 1
            }

            );
        },

    }
}