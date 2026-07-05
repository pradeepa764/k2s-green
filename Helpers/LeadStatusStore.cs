using System.Collections.Concurrent;

namespace TestUmbPro.Helpers
{
    public static class LeadStatusStore
    {
        public static ConcurrentDictionary<int, string> OldStatuses
            = new ConcurrentDictionary<int, string>();
    }
}