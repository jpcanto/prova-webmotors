import { action } from "typesafe-actions";

interface IFilters {
  readonly make?: string | null,
  readonly model?: string | null,
  readonly version?: string | null,
}

export function setMakeFilter({make}: IFilters) {
  return action('@filters/SET_MAKE', {
      make
    });
}

export function setModelFilter({model}: IFilters) {
  return action('@filters/SET_MODEL', {
      model
    });
}

export function setVersionFilter({version}: IFilters) {
  return action('@filters/SET_VERSION', {
      version
    });
}

export function listFilters() {
  return action('@filters/LIST_FILTERS');
}
