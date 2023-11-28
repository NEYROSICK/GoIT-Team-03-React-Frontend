const getGenderQueries = (femaleCheck, maleCheck) => {
  if (maleCheck && !femaleCheck) {
    return { sex: 'male' };
  } else if (femaleCheck && !maleCheck) {
    return { sex: 'female' };
  } else {
    return {};
  }
};

//! I AM AN UPGRADE

const getAgesQueries = (to1Check, to2Check, from2Check) => {
  if (to1Check && !to2Check && !from2Check) {
    return { age: 'to-1' };
  } else if (!to1Check && to2Check && !from2Check) {
    return { age: 'to-2' };
  } else if (!to1Check && !to2Check && from2Check) {
    return { age: 'from-2' };
  } else if (to1Check && to2Check && !from2Check) {
    return { age: 'to-2' };
  } else if (to1Check && !to2Check && from2Check) {
    return { age: 'to-1-from-2' };
  } else {
    return;
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
