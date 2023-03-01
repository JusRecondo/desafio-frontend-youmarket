import { useCallback, useEffect, useRef, useState } from 'react';
import { getAllAccounts, searchAccount } from '../services/api';

export function useAccounts({ search }) {
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const previousSearch = useRef(search);

    useEffect(() => {
        getAllAccounts()
            .then(data => setAccounts(data))
            .catch(e => setError(e.message));
    }, []);

    const searchAccountByNameOrEmail = useCallback(async search => {
        if (search === previousSearch.current) return;

        try {
            setLoading(true);
            previousSearch.current = search;
            const fetchedAccount = await searchAccount(search);
            setAccounts(fetchedAccount);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { accounts, searchAccountByNameOrEmail, error, loading };
}
