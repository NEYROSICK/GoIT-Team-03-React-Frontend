const getGenderQueries = (femaleCheck, maleCheck) => {
  if (maleCheck && !femaleCheck) {
    return { gender: 'male' };
  } else if (!maleCheck && femaleCheck) {
    return { gender: 'female' };
  } else {
    return {};
  }
};

const getAgesQueries = (to1Check, to2Check, from2Check) => {
  if (to1Check && !to2Check && !from2Check) {
    return { age: 'to1' };
  } else if (to1Check && to2Check && !from2Check) {
    return { age: 'to1', age: 'to2' };
  } else if (to1Check && !to2Check && from2Check) {
    return { age: 'to1', age: 'from2' };
  } else if (!to1Check && to2Check && !from2Check) {
    return { age: 'to2' };
  } else if (!to1Check && to2Check && from2Check) {
    return { age: 'to2', age: 'from2' };
  } else if (!to1Check && !to2Check && from2Check) {
    return { age: 'from2' };
  }
};

export const AllFilterQueries = (
  to1Check,
  to2Check,
  from2Check,
  femaleCheck,
  maleCheck,
) => {
  if (
    (to1Check && to2Check && from2Check) ||
    (!to1Check && !to2Check && !from2Check)
  ) {
    return { ...getGenderQueries(femaleCheck, maleCheck) };
  } else if ((maleCheck && femaleCheck) || (!maleCheck && !femaleCheck)) {
    return { ...getAgesQueries(to1Check, to2Check, from2Check) };
  } else {
    return {
      ...getAgesQueries(to1Check, to2Check, from2Check),
      ...getGenderQueries(femaleCheck, maleCheck),
    };
  }
};
