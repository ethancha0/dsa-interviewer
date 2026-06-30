export type ProblemListItem = {
  category: string;
  slug: string;
  title: string;
  url: string;
};

type ProblemSource = {
  category: string;
  problems: Array<{
    slug: string;
    title: string;
  }>;
};

const leetcodeUrl = (slug: string) => `https://leetcode.com/problems/${slug}/`;

function flattenProblems(sources: ProblemSource[]) {
  return sources.flatMap(({ category, problems }) =>
    problems.map((problem) => ({
      category,
      slug: problem.slug,
      title: problem.title,
      url: leetcodeUrl(problem.slug),
    })),
  );
}

export const neetcode150Problems: ProblemListItem[] = flattenProblems([
  {
    category: "Arrays & Hashing",
    problems: [
      { title: "Contains Duplicate", slug: "contains-duplicate" },
      { title: "Valid Anagram", slug: "valid-anagram" },
      { title: "Two Sum", slug: "two-sum" },
      { title: "Group Anagrams", slug: "group-anagrams" },
      { title: "Top K Frequent Elements", slug: "top-k-frequent-elements" },
      { title: "Product of Array Except Self", slug: "product-of-array-except-self" },
      { title: "Valid Sudoku", slug: "valid-sudoku" },
      { title: "Encode and Decode Strings", slug: "encode-and-decode-strings" },
      { title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence" },
    ],
  },
  {
    category: "Two Pointers",
    problems: [
      { title: "Valid Palindrome", slug: "valid-palindrome" },
      { title: "Two Sum II Input Array Is Sorted", slug: "two-sum-ii-input-array-is-sorted" },
      { title: "3Sum", slug: "3sum" },
      { title: "Container With Most Water", slug: "container-with-most-water" },
      { title: "Trapping Rain Water", slug: "trapping-rain-water" },
    ],
  },
  {
    category: "Sliding Window",
    problems: [
      { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock" },
      {
        title: "Longest Substring Without Repeating Characters",
        slug: "longest-substring-without-repeating-characters",
      },
      {
        title: "Longest Repeating Character Replacement",
        slug: "longest-repeating-character-replacement",
      },
      { title: "Permutation in String", slug: "permutation-in-string" },
      { title: "Minimum Window Substring", slug: "minimum-window-substring" },
      { title: "Sliding Window Maximum", slug: "sliding-window-maximum" },
    ],
  },
  {
    category: "Stack",
    problems: [
      { title: "Valid Parentheses", slug: "valid-parentheses" },
      { title: "Min Stack", slug: "min-stack" },
      { title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation" },
      { title: "Generate Parentheses", slug: "generate-parentheses" },
      { title: "Daily Temperatures", slug: "daily-temperatures" },
      { title: "Car Fleet", slug: "car-fleet" },
      { title: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram" },
    ],
  },
  {
    category: "Binary Search",
    problems: [
      { title: "Binary Search", slug: "binary-search" },
      { title: "Search a 2D Matrix", slug: "search-a-2d-matrix" },
      { title: "Koko Eating Bananas", slug: "koko-eating-bananas" },
      {
        title: "Find Minimum in Rotated Sorted Array",
        slug: "find-minimum-in-rotated-sorted-array",
      },
      { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array" },
      { title: "Time Based Key Value Store", slug: "time-based-key-value-store" },
      { title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays" },
    ],
  },
  {
    category: "Linked List",
    problems: [
      { title: "Reverse Linked List", slug: "reverse-linked-list" },
      { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists" },
      { title: "Linked List Cycle", slug: "linked-list-cycle" },
      { title: "Reorder List", slug: "reorder-list" },
      { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list" },
      { title: "Copy List with Random Pointer", slug: "copy-list-with-random-pointer" },
      { title: "Add Two Numbers", slug: "add-two-numbers" },
      { title: "Find the Duplicate Number", slug: "find-the-duplicate-number" },
      { title: "LRU Cache", slug: "lru-cache" },
      { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists" },
      { title: "Reverse Nodes in K-Group", slug: "reverse-nodes-in-k-group" },
    ],
  },
  {
    category: "Trees",
    problems: [
      { title: "Invert Binary Tree", slug: "invert-binary-tree" },
      { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree" },
      { title: "Diameter of Binary Tree", slug: "diameter-of-binary-tree" },
      { title: "Balanced Binary Tree", slug: "balanced-binary-tree" },
      { title: "Same Tree", slug: "same-tree" },
      { title: "Subtree of Another Tree", slug: "subtree-of-another-tree" },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        slug: "lowest-common-ancestor-of-a-binary-search-tree",
      },
      { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal" },
      { title: "Binary Tree Right Side View", slug: "binary-tree-right-side-view" },
      { title: "Count Good Nodes in Binary Tree", slug: "count-good-nodes-in-binary-tree" },
      { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree" },
      { title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst" },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
      },
      { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum" },
      {
        title: "Serialize and Deserialize Binary Tree",
        slug: "serialize-and-deserialize-binary-tree",
      },
    ],
  },
  {
    category: "Heap / Priority Queue",
    problems: [
      { title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream" },
      { title: "Last Stone Weight", slug: "last-stone-weight" },
      { title: "K Closest Points to Origin", slug: "k-closest-points-to-origin" },
      { title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array" },
      { title: "Task Scheduler", slug: "task-scheduler" },
      { title: "Design Twitter", slug: "design-twitter" },
      { title: "Find Median from Data Stream", slug: "find-median-from-data-stream" },
    ],
  },
  {
    category: "Backtracking",
    problems: [
      { title: "Subsets", slug: "subsets" },
      { title: "Combination Sum", slug: "combination-sum" },
      { title: "Permutations", slug: "permutations" },
      { title: "Subsets II", slug: "subsets-ii" },
      { title: "Combination Sum II", slug: "combination-sum-ii" },
      { title: "Word Search", slug: "word-search" },
      { title: "Palindrome Partitioning", slug: "palindrome-partitioning" },
      {
        title: "Letter Combinations of a Phone Number",
        slug: "letter-combinations-of-a-phone-number",
      },
      { title: "N-Queens", slug: "n-queens" },
    ],
  },
  {
    category: "Tries",
    problems: [
      { title: "Implement Trie", slug: "implement-trie-prefix-tree" },
      {
        title: "Design Add and Search Words Data Structure",
        slug: "design-add-and-search-words-data-structure",
      },
      { title: "Word Search II", slug: "word-search-ii" },
    ],
  },
  {
    category: "Graphs",
    problems: [
      { title: "Number of Islands", slug: "number-of-islands" },
      { title: "Clone Graph", slug: "clone-graph" },
      { title: "Max Area of Island", slug: "max-area-of-island" },
      { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow" },
      { title: "Surrounded Regions", slug: "surrounded-regions" },
      { title: "Rotting Oranges", slug: "rotting-oranges" },
      { title: "Walls and Gates", slug: "walls-and-gates" },
      { title: "Course Schedule", slug: "course-schedule" },
      { title: "Course Schedule II", slug: "course-schedule-ii" },
      { title: "Redundant Connection", slug: "redundant-connection" },
      {
        title: "Number of Connected Components in an Undirected Graph",
        slug: "number-of-connected-components-in-an-undirected-graph",
      },
      { title: "Graph Valid Tree", slug: "graph-valid-tree" },
      { title: "Word Ladder", slug: "word-ladder" },
    ],
  },
  {
    category: "Advanced Graphs",
    problems: [
      { title: "Reconstruct Itinerary", slug: "reconstruct-itinerary" },
      { title: "Min Cost to Connect All Points", slug: "min-cost-to-connect-all-points" },
      { title: "Network Delay Time", slug: "network-delay-time" },
      { title: "Swim in Rising Water", slug: "swim-in-rising-water" },
      { title: "Alien Dictionary", slug: "alien-dictionary" },
      { title: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops" },
    ],
  },
  {
    category: "1-D Dynamic Programming",
    problems: [
      { title: "Climbing Stairs", slug: "climbing-stairs" },
      { title: "Min Cost Climbing Stairs", slug: "min-cost-climbing-stairs" },
      { title: "House Robber", slug: "house-robber" },
      { title: "House Robber II", slug: "house-robber-ii" },
      { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring" },
      { title: "Palindromic Substrings", slug: "palindromic-substrings" },
      { title: "Decode Ways", slug: "decode-ways" },
      { title: "Coin Change", slug: "coin-change" },
      { title: "Maximum Product Subarray", slug: "maximum-product-subarray" },
      { title: "Word Break", slug: "word-break" },
      { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence" },
      { title: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum" },
    ],
  },
  {
    category: "2-D Dynamic Programming",
    problems: [
      { title: "Unique Paths", slug: "unique-paths" },
      { title: "Longest Common Subsequence", slug: "longest-common-subsequence" },
      {
        title: "Best Time to Buy and Sell Stock with Cooldown",
        slug: "best-time-to-buy-and-sell-stock-with-cooldown",
      },
      { title: "Coin Change II", slug: "coin-change-ii" },
      { title: "Target Sum", slug: "target-sum" },
      { title: "Interleaving String", slug: "interleaving-string" },
      {
        title: "Longest Increasing Path in a Matrix",
        slug: "longest-increasing-path-in-a-matrix",
      },
      { title: "Distinct Subsequences", slug: "distinct-subsequences" },
      { title: "Edit Distance", slug: "edit-distance" },
      { title: "Burst Balloons", slug: "burst-balloons" },
      { title: "Regular Expression Matching", slug: "regular-expression-matching" },
    ],
  },
  {
    category: "Greedy",
    problems: [
      { title: "Maximum Subarray", slug: "maximum-subarray" },
      { title: "Jump Game", slug: "jump-game" },
      { title: "Jump Game II", slug: "jump-game-ii" },
      { title: "Gas Station", slug: "gas-station" },
      { title: "Hand of Straights", slug: "hand-of-straights" },
      { title: "Merge Triplets to Form Target Triplet", slug: "merge-triplets-to-form-target-triplet" },
      { title: "Partition Labels", slug: "partition-labels" },
      { title: "Valid Parenthesis String", slug: "valid-parenthesis-string" },
    ],
  },
  {
    category: "Intervals",
    problems: [
      { title: "Insert Interval", slug: "insert-interval" },
      { title: "Merge Intervals", slug: "merge-intervals" },
      { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals" },
      { title: "Meeting Rooms", slug: "meeting-rooms" },
      { title: "Meeting Rooms II", slug: "meeting-rooms-ii" },
      { title: "Minimum Interval to Include Each Query", slug: "minimum-interval-to-include-each-query" },
    ],
  },
  {
    category: "Math & Geometry",
    problems: [
      { title: "Rotate Image", slug: "rotate-image" },
      { title: "Spiral Matrix", slug: "spiral-matrix" },
      { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes" },
      { title: "Happy Number", slug: "happy-number" },
      { title: "Plus One", slug: "plus-one" },
      { title: "Pow(x, n)", slug: "powx-n" },
      { title: "Multiply Strings", slug: "multiply-strings" },
      { title: "Detect Squares", slug: "detect-squares" },
    ],
  },
  {
    category: "Bit Manipulation",
    problems: [
      { title: "Single Number", slug: "single-number" },
      { title: "Number of 1 Bits", slug: "number-of-1-bits" },
      { title: "Counting Bits", slug: "counting-bits" },
      { title: "Reverse Bits", slug: "reverse-bits" },
      { title: "Missing Number", slug: "missing-number" },
      { title: "Sum of Two Integers", slug: "sum-of-two-integers" },
      { title: "Reverse Integer", slug: "reverse-integer" },
    ],
  },
]);

export const blind75Problems: ProblemListItem[] = flattenProblems([
  {
    category: "Array",
    problems: [
      { title: "Two Sum", slug: "two-sum" },
      { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock" },
      { title: "Contains Duplicate", slug: "contains-duplicate" },
      { title: "Product of Array Except Self", slug: "product-of-array-except-self" },
      { title: "Maximum Subarray", slug: "maximum-subarray" },
      { title: "Maximum Product Subarray", slug: "maximum-product-subarray" },
      {
        title: "Find Minimum in Rotated Sorted Array",
        slug: "find-minimum-in-rotated-sorted-array",
      },
      { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array" },
      { title: "3Sum", slug: "3sum" },
      { title: "Container With Most Water", slug: "container-with-most-water" },
    ],
  },
  {
    category: "Binary",
    problems: [
      { title: "Sum of Two Integers", slug: "sum-of-two-integers" },
      { title: "Number of 1 Bits", slug: "number-of-1-bits" },
      { title: "Counting Bits", slug: "counting-bits" },
      { title: "Missing Number", slug: "missing-number" },
      { title: "Reverse Bits", slug: "reverse-bits" },
    ],
  },
  {
    category: "Dynamic Programming",
    problems: [
      { title: "Climbing Stairs", slug: "climbing-stairs" },
      { title: "Coin Change", slug: "coin-change" },
      { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence" },
      { title: "Longest Common Subsequence", slug: "longest-common-subsequence" },
      { title: "Word Break", slug: "word-break" },
      { title: "Combination Sum", slug: "combination-sum" },
      { title: "House Robber", slug: "house-robber" },
      { title: "House Robber II", slug: "house-robber-ii" },
      { title: "Decode Ways", slug: "decode-ways" },
      { title: "Unique Paths", slug: "unique-paths" },
      { title: "Jump Game", slug: "jump-game" },
    ],
  },
  {
    category: "Graph",
    problems: [
      { title: "Clone Graph", slug: "clone-graph" },
      { title: "Course Schedule", slug: "course-schedule" },
      { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow" },
      { title: "Number of Islands", slug: "number-of-islands" },
      { title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence" },
      { title: "Alien Dictionary", slug: "alien-dictionary" },
      { title: "Graph Valid Tree", slug: "graph-valid-tree" },
      {
        title: "Number of Connected Components in an Undirected Graph",
        slug: "number-of-connected-components-in-an-undirected-graph",
      },
    ],
  },
  {
    category: "Interval",
    problems: [
      { title: "Insert Interval", slug: "insert-interval" },
      { title: "Merge Intervals", slug: "merge-intervals" },
      { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals" },
      { title: "Meeting Rooms", slug: "meeting-rooms" },
      { title: "Meeting Rooms II", slug: "meeting-rooms-ii" },
    ],
  },
  {
    category: "Linked List",
    problems: [
      { title: "Reverse Linked List", slug: "reverse-linked-list" },
      { title: "Linked List Cycle", slug: "linked-list-cycle" },
      { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists" },
      { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists" },
      { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list" },
      { title: "Reorder List", slug: "reorder-list" },
    ],
  },
  {
    category: "Matrix",
    problems: [
      { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes" },
      { title: "Spiral Matrix", slug: "spiral-matrix" },
      { title: "Rotate Image", slug: "rotate-image" },
      { title: "Word Search", slug: "word-search" },
    ],
  },
  {
    category: "String",
    problems: [
      { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters" },
      { title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement" },
      { title: "Minimum Window Substring", slug: "minimum-window-substring" },
      { title: "Valid Anagram", slug: "valid-anagram" },
      { title: "Group Anagrams", slug: "group-anagrams" },
      { title: "Valid Parentheses", slug: "valid-parentheses" },
      { title: "Valid Palindrome", slug: "valid-palindrome" },
      { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring" },
      { title: "Palindromic Substrings", slug: "palindromic-substrings" },
      { title: "Encode and Decode Strings", slug: "encode-and-decode-strings" },
    ],
  },
  {
    category: "Tree",
    problems: [
      { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree" },
      { title: "Same Tree", slug: "same-tree" },
      { title: "Invert Binary Tree", slug: "invert-binary-tree" },
      { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum" },
      { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal" },
      {
        title: "Serialize and Deserialize Binary Tree",
        slug: "serialize-and-deserialize-binary-tree",
      },
      { title: "Subtree of Another Tree", slug: "subtree-of-another-tree" },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
      },
      { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree" },
      { title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst" },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        slug: "lowest-common-ancestor-of-a-binary-search-tree",
      },
      { title: "Implement Trie", slug: "implement-trie-prefix-tree" },
      {
        title: "Design Add and Search Words Data Structure",
        slug: "design-add-and-search-words-data-structure",
      },
      { title: "Word Search II", slug: "word-search-ii" },
    ],
  },
  {
    category: "Heap",
    problems: [
      { title: "Top K Frequent Elements", slug: "top-k-frequent-elements" },
      { title: "Find Median from Data Stream", slug: "find-median-from-data-stream" },
    ],
  },
]);
