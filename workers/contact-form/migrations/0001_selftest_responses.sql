CREATE TABLE IF NOT EXISTS instrument_versions (
  id TEXT PRIMARY KEY,
  version TEXT NOT NULL,
  published_at TEXT,
  retired_at TEXT,
  status TEXT NOT NULL,
  item_definition_hash TEXT NOT NULL
);

INSERT OR IGNORE INTO instrument_versions (
  id,
  version,
  published_at,
  status,
  item_definition_hash
) VALUES (
  'ADHS-ST-0.2',
  '0.2',
  '2026-08-21T00:00:00.000Z',
  'active',
  'ADHS-ST-0.2-26-items-2026-08-21'
);

CREATE TABLE IF NOT EXISTS selftest_responses (
  response_id TEXT PRIMARY KEY,
  instrument_version TEXT NOT NULL,
  created_at TEXT NOT NULL,
  completed_at TEXT,
  consent INTEGER NOT NULL CHECK (consent = 1),
  consent_version TEXT NOT NULL,
  consent_at TEXT NOT NULL,
  age INTEGER,
  gender TEXT,
  existing_adhd_dx TEXT,
  diagnosis_source TEXT,
  adhd_medication TEXT,
  answers TEXT NOT NULL,
  mean_attention REAL,
  mean_activation REAL,
  mean_impulsivity REAL,
  impairment_mean REAL,
  compensation_score INTEGER,
  frequent_attention INTEGER,
  frequent_activation INTEGER,
  frequent_impulsivity INTEGER,
  feedback_unclear TEXT,
  feedback_duplicate TEXT,
  feedback_missing TEXT,
  FOREIGN KEY (instrument_version) REFERENCES instrument_versions(id)
);

CREATE INDEX IF NOT EXISTS idx_selftest_responses_completed_at
  ON selftest_responses(completed_at);

CREATE INDEX IF NOT EXISTS idx_selftest_responses_instrument_version
  ON selftest_responses(instrument_version);
