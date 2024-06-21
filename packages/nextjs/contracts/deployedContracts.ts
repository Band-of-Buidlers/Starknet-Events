/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  sepolia: {
    EventsRegistry: {
      address:
        "0x02ab25b83fb475256b0a5ea4b858bfdd8cb4aaab6f95b3b7c1f8993e35b5dbd6",
      abi: [
        {
          type: "impl",
          name: "EventsRegistryImpl",
          interface_name:
            "contracts::events_registry::interface::IEventsRegistry",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::events_registry::interface::IEventsRegistry",
          items: [
            {
              type: "function",
              name: "total_events",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "address_of_event",
              inputs: [
                {
                  name: "event_id",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "nber_of_events_published_by_organizer",
              inputs: [
                {
                  name: "organizer",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "event_of_owner_by_index",
              inputs: [
                {
                  name: "owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
                {
                  name: "event_index",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "publish_new_event",
              inputs: [
                {
                  name: "name",
                  type: "core::byte_array::ByteArray",
                },
              ],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "UpgradeableImpl",
          interface_name: "openzeppelin::upgrades::interface::IUpgradeable",
        },
        {
          type: "interface",
          name: "openzeppelin::upgrades::interface::IUpgradeable",
          items: [
            {
              type: "function",
              name: "upgrade",
              inputs: [
                {
                  name: "new_class_hash",
                  type: "core::starknet::class_hash::ClassHash",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "openzeppelin::access::ownable::interface::IOwnable",
        },
        {
          type: "interface",
          name: "openzeppelin::access::ownable::interface::IOwnable",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
          kind: "struct",
          members: [
            {
              name: "class_hash",
              type: "core::starknet::class_hash::ClassHash",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "Upgraded",
              type: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::events_registry::events_registry::EventsRegistry::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
              kind: "flat",
            },
            {
              name: "UpgradeableEvent",
              type: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
              kind: "flat",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
