export const getDatabaseUrl = () => {
  const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;
  if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_DB || !POSTGRES_USER || !POSTGRES_PASSWORD) {
    throw new Error("POSTGRES_HOST, POSTGRES_PORT, and POSTGRES_DB must be set");
  }
  return `postgresql://${encodeURIComponent(POSTGRES_USER)}:${encodeURIComponent(POSTGRES_PASSWORD)}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
};