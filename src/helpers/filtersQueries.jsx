const getGenderQueries = (femaleCheck, maleCheck) => {
  if (maleCheck) {
    return { sex: 'male' };
  } else if (femaleCheck) {
    return { sex: 'female' };
  }
};

//! I AM AN UPGRADE

const getAgesQueries = (to1Check, to2Check, from2Check) => {
  if (to1Check) {
    return { age: 'to-1' };
  }

  if (to2Check) {
    return { age: 'to-2' };
  }

  if (from2Check) {
    return { age: 'from-2' };
  }

  if (to1Check && to2Check) {
    return { age: 'to-2' };
  }

  if (to1Check && from2Check) {
    return { age: 'to-1-from-2' };
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

