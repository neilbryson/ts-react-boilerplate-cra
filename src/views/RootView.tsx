import { NOT_FOUND } from 'redux-first-router';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { Routes } from '../redux/routing/routesMap';
import { CatFactsView } from './CatFactsView';

export const RootView = (): JSX.Element | null => {
  const locationType = useTypedSelector((state) => state.location.type);

  switch (locationType) {
    case Routes.HOME:
      return <CatFactsView />;
    case NOT_FOUND:
    default:
      return null;
  }
};
