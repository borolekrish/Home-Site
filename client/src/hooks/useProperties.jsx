import React from 'react'
import { useQuery } from 'react-query'
import { getProperties } from '../utils/api'

export const useProperties = () => {
    const { data, isError, isLoading, refetch } = useQuery(
        'properties',
        getProperties,
        { refetchOnWindowFocus: false }
    );
    return {
        data,
        isError,
        isLoading,
        refetch
    }
}

export default useProperties 