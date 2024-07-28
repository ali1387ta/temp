export type Task = {
  taskId: number;
  name: string;
  icon: string;
  condition: string;
  reward: number;
  expired: boolean;
  completed: boolean;
};

export type User = {
  userId: number;
  name: string;
  balance: number;
  telegramId: string;
  telegramPremium: boolean;
  walletAddress: string;
  avatar: string | null;
  friends: {
    userId: number;
    name: string;
    balance: string;
    telegramId: string;
  }[];
  exchange: {
    exchangeId: number;
    name: string;
  };
  taskCategories: {
    name: string;
    icon: string;
    tasks: Task[];
  }[];
  rewards: {
    accountAge: number;
    telegramPremium: number;
    invite: number;
  };
};
