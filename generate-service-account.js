const fs = require('fs');

if (!process.env.SERVICE_ACCOUNT_JSON) {
  console.log("⚠️  No SERVICE_ACCOUNT_JSON env var found");
  process.exit(1);
}

try {
  fs.writeFileSync('serviceAccount.json', process.env.SERVICE_ACCOUNT_JSON);
  console.log("✅ serviceAccount.json created successfully");
} catch (e) {
  console.error("❌ Failed to write serviceAccount.json", e);
}
