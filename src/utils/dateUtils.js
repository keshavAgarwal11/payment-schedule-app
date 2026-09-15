

function addMonths(dateString, months) {

    const date = new Date(dateString + "T00:00:00Z");

    const day = date.getUTCDate();

    const targetMonth = date.getUTCMonth() + months;

    const targetYear = date.getUTCFullYear() +
        Math.floor(targetMonth / 12);

    const finalMonth = targetMonth % 12;

    // Find the last day of the target month
    const lastDay = new Date(
        Date.UTC(targetYear, finalMonth + 1, 0)
    ).getUTCDate();

    const finalDay = Math.min(day, lastDay);

    const result = new Date(
        Date.UTC(targetYear, finalMonth, finalDay)
    );

    return result.toISOString().split("T")[0];
}




module.exports = {
    addMonths
};