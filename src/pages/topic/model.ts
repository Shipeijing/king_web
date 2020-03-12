import { useRequest } from '@umijs/hooks';
import React from 'react';
export default {
    namespace: "topIc",
    state: {
        dataList: [{ type: '2015-09-01', text: "xxxxxxxxxxxxxxxxxxxxxxx" },
        { type: '2015-09-01', text: "xxxxxxxxxxxxxxxxxxxxxxx" },
        { type: '2015-09-01', text: "xxxxxxxxxxxxxxxxxxxxxxx" },
        { type: '2015-09-01', text: "xxxxxxxxxxxxxxxxxxxxxxx" }]
    },
    reducers: {
        changedataList(state, { payload }) {
            console.log(payload)
            return state.dataList = payload
        }
    },
    effects: {
        *addAfter1Second({ }, { put, call }) {

            yield call(() => {

                // const { data, error, loading } =
                //     useRequest('http://localhost:7001/getTopIc?id=1')
                return []
            })
            // yield put({ type: "changedataList", payload:  })
        },
    }
}