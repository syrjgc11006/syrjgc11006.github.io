/* TechShare English Site — static dataset (mirrors the Chinese edition seed) */
var SITE_DATA = {
  brand: 'TechShare',
  tagline: 'Developer blog & learning resources',
  categories: [
    { id: 'c1', name: 'Learning Materials', desc: 'Interview prep, deep-dive tutorials and career roadmaps for .NET / C# engineers.' },
    { id: 'c3', name: 'Technical Articles', desc: 'Protocol analysis, performance tuning and architecture practice from real projects.' }
  ],
  resources: [
    {
      id: 'r1', category_id: 'c1', title: 'C# Full-Stack Interview Bank (300 Questions with Answers)',
      summary: 'High-frequency interview questions across .NET / C# / EF Core / Redis / SQL Server, graded by difficulty — ideal for a systematic review before job hunting.',
      content: '<h3>Coverage</h3><ul><li>C# language: delegates, events, generics, async/await</li><li>.NET platform: CLR, GC, JIT</li><li>EF Core: queries, migrations, performance</li><li>Redis: cache penetration / breakdown / avalanche</li></ul><p>Every question ships with a model answer and the key point it evaluates, plus 3 mock exam papers.</p>',
      hot: 2401, outer_link: '', accent: 'green'
    },
    {
      id: 'r2', category_id: 'c1', title: 'Redis from Basics to Internals: Data Structures, Persistence, Clustering',
      summary: 'Source-level walkthrough of the five data structures, RDB/AOF persistence, master-replica replication and Sentinel high availability, with a sandbox environment.',
      content: '<h3>Data Structures</h3><table><tr><th>Type</th><th>Underlying implementation</th></tr><tr><td>String</td><td>SDS</td></tr><tr><td>List</td><td>QuickList</td></tr><tr><td>Hash</td><td>Dict + Ziplist</td></tr></table><h3>Persistence Comparison</h3><p>RDB snapshots are compact and fast to restore; AOF is safer but larger. For production, hybrid persistence is recommended.</p>',
      hot: 880, outer_link: '', accent: 'teal'
    },
    {
      id: 'r3', category_id: 'c1', title: 'WPF Custom Control Development: From Zero to Mastery',
      summary: 'Dependency properties, routed events, templated controls and visual state management, with a breakdown of the AntControl component library source.',
      content: '<h3>Core Concepts</h3><ul><li>DependencyProperty</li><li>RoutedEvent</li><li>ControlTemplate</li></ul><h3>Three Steps to a Custom Control</h3><pre><code>1. Declare dependency properties and callbacks\n2. Write the default style and template\n3. Handle visual state transitions</code></pre>',
      hot: 1104, outer_link: '', accent: 'green'
    },
    {
      id: 'r4', category_id: 'c1', title: 'A Developer\'s Growth Roadmap: Planning After 35 and Soft Skills',
      summary: 'Technical depth vs management breadth, side projects, and health — with real cases and an executable mid-to-long-term plan.',
      content: '<h3>Planning Framework</h3><table><tr><th>Stage</th><th>Focus</th></tr><tr><td>25–30</td><td>Deepen your craft, understand the business</td></tr><tr><td>30–35</td><td>Architecture capability + teamwork</td></tr><tr><td>35+</td><td>Expert path or management path</td></tr></table>',
      hot: 2033, outer_link: '', accent: 'gold'
    },
    {
      id: 'r9', category_id: 'c3', title: 'Modbus TCP Protocol Explained with Debugging Practice',
      summary: 'From frame structure and function codes to exception codes, with packet-capture tools — including Wireshark filters and common pitfalls.',
      content: '<h3>Protocol Basics</h3><p>Modbus TCP carries Modbus frames over Ethernet, default port 502. The MBAP header consists of transaction ID + protocol ID + length + unit ID.</p><h3>Common Function Codes</h3><table><tr><th>Code</th><th>Meaning</th></tr><tr><td>0x03</td><td>Read holding registers</td></tr><tr><td>0x06</td><td>Write single register</td></tr><tr><td>0x10</td><td>Write multiple registers</td></tr></table><h3>Capture Filter</h3><pre><code>tcp.port == 502 && modbus</code></pre>',
      hot: 986, outer_link: '', accent: 'teal'
    },
    {
      id: 'r10', category_id: 'c3', title: 'MySQL 8.0 Performance Tuning in Practice',
      summary: 'Broken-index diagnosis, slow query analysis, InnoDB locks and isolation levels — full-chain practice from execution plans to parameter tuning.',
      content: '<h3>Slow Query Diagnosis</h3><pre><code>SET GLOBAL slow_query_log = ON;\nSHOW VARIABLES LIKE \'long_query_time\';</code></pre><h3>Index Design Principles</h3><ul><li>Leftmost prefix matching</li><li>Prefer high selectivity columns</li><li>Covering indexes to avoid table lookups</li></ul>',
      hot: 1755, outer_link: '', accent: 'green'
    },
    {
      id: 'r11', category_id: 'c3', title: 'ASP.NET Core 6 Web API: From Zero to Deployment',
      summary: 'RESTful design, JWT auth, EF Core repositories, Swagger docs, Nginx reverse proxy and HTTPS deployment — the full journey.',
      content: '<h3>Chapter Preview</h3><ol><li>Project initialization and layering</li><li>JWT authentication and authorization</li><li>EF Core data access</li><li>Docker + Nginx deployment</li></ol>',
      hot: 934, outer_link: 'https://www.bilibili.com/', accent: 'gold'
    },
    {
      id: 'r12', category_id: 'c3', title: 'Kafka Message Queues: Internals and Best Practices',
      summary: 'Partitions and replication, consumer groups, exactly-once semantics, and a Kafka vs RabbitMQ selection guide.',
      content: '<h3>Core Mechanisms</h3><ul><li>Log-segment storage</li><li>ISR replica sync</li><li>Consumer rebalancing</li></ul><h3>Selection Advice</h3><p>Choose Kafka for high throughput and log ingestion; choose RabbitMQ for complex routing and low-latency scenarios.</p>',
      hot: 647, outer_link: '', accent: 'teal'
    }
  ]
};

/* cover art: inline SVG per accent */
function coverSvg(accent) {
  var map = {
    green:  { bg: '#E8F2EC', fg: '#166534' },
    teal:   { bg: '#E4F1EF', fg: '#0F5B56' },
    gold:   { bg: '#F7EFE2', fg: '#8A5A00' }
  };
  var c = map[accent] || map.green;
  return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">'
    + '<rect x="6" y="6" width="52" height="52" rx="10" fill="' + c.bg + '"/>'
    + '<rect x="18" y="18" width="28" height="8" rx="4" fill="' + c.fg + '" opacity="0.85"/>'
    + '<rect x="18" y="30" width="28" height="8" rx="4" fill="' + c.fg + '" opacity="0.55"/>'
    + '<rect x="18" y="42" width="17" height="8" rx="4" fill="' + c.fg + '" opacity="0.35"/>'
    + '</svg>';
}
