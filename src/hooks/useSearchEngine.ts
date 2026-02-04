import { useState, useMemo } from 'react';
import { SEARCH_ENGINES } from '../lib/searchEngines';
import type { SearchEngine, SearchMode } from '../types/searchEngine';

export const useSearchEngine = () => {
  const [activeBtn, setActiveBtn] = useState<SearchMode>('search');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isIncognito, setIsIncognito] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState<SearchEngine>(SEARCH_ENGINES[0]);

  // Filter search engines based on active mode //
  const filteredEngines = useMemo(() => {
    if (isIncognito) {
      return SEARCH_ENGINES.filter((engine) => engine.category === 'privacy');
    }
    if (activeBtn === 'search') {
      return SEARCH_ENGINES.filter((engine) => engine.category === 'traditional');
    }
    return SEARCH_ENGINES.filter((engine) => engine.category === 'ai');
  }, [activeBtn, isIncognito]);

  // Update selected engine when mode changes //
  const handleModeChange = (mode: SearchMode) => {
    setActiveBtn(mode);
    setIsIncognito(false);
    const engines = SEARCH_ENGINES.filter(
      (engine) => engine.category === (mode === 'search' ? 'traditional' : 'ai'),
    );
    setSelectedEngine(engines[0]);
  };

  const handleIncognitoToggle = () => {
    const newIncognitoState = !isIncognito;
    setIsIncognito(newIncognitoState);
    if (newIncognitoState) {
      const privacyEngines = SEARCH_ENGINES.filter((engine) => engine.category === 'privacy');
      setSelectedEngine(privacyEngines[0]);
    } else {
      const category = activeBtn === 'search' ? 'traditional' : 'ai';
      const engines = SEARCH_ENGINES.filter((engine) => engine.category === category);
      setSelectedEngine(engines[0]);
    }
  };

  const handleEngineSelect = (engine: SearchEngine) => {
    setSelectedEngine(engine);
    setDropdownVisible(false);
  };

  return {
    activeBtn,
    dropdownVisible,
    isIncognito,
    selectedEngine,
    filteredEngines,
    setDropdownVisible,
    handleModeChange,
    handleIncognitoToggle,
    handleEngineSelect,
  };
};
