import { useState, useMemo } from 'react'
import { map } from 'lodash-es'
import { useDebounce } from 'react-use'
import Fuse from 'fuse.js'

/**
 * @name useFuse
 * @returns Object.
 * @description A React Hook that filters an array using the Fuse.js fuzzy-search library.
 * @example
 * @see https://fusejs.io/
 */

function useFuse(list, {delay = 200, ...options}) {
    const [term, setTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState('');

    const fuse = useMemo(() => new Fuse(list, options), [list, options])

    const result = useMemo(() => {
        const result = fuse.search(`${debouncedTerm}`)
        return debouncedTerm ? map(result, 'item') : list
    }, [fuse, term])

    const [, cancel] = useDebounce(
        () => {
            setDebouncedTerm(term)
        },
        delay,
        [term]
    )

    const reset = () => setTerm('')

    return {result, term, setTerm, reset}
}

export default useFuse