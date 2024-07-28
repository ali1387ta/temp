import { ages } from "./ages";

export function calculateDate(id: number): Date {
  const ids = Object.keys(ages).map((i) => parseInt(i));
  const minId = ids[0];
  const maxId = ids[ids.length - 1];
  const biggestPosibleId = 8_000_000_000;

  if (id <= minId) {
    return new Date(ages[minId]);
  } else if (id === maxId) {
    return new Date(ages[maxId]);
  } else if (id >= maxId) {
    const maxIdTime = ages[maxId];
    const now = Date.now();
    const maxDateDiff = now - maxIdTime;

    return new Date(((id - maxId) / (biggestPosibleId - maxId)) * maxDateDiff + maxIdTime);
  } else {
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] >= id) {
        const lesserDate = ages[ids[i - 1]];
        const greaterDate = ages[ids[i]];
        const dateDiff = greaterDate - lesserDate;

        return new Date(((id - ids[i - 1]) / (ids[i] - ids[i - 1])) * dateDiff + lesserDate);
      }
    }
  }
  throw new Error("an error occured");
}

/**
 * Calculate age in years
 * @param date Date (object)
 * @returns age in years (number)
 */
export function calculateAge(date: Date): number {
  const now = Date.now();
  const dateDiff = now - date.getTime();
  return dateDiff / 1000 / 60 / 60 / 24 / 365.25;
}
