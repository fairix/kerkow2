<?php

/**
 * digitvision
 *
 * @category  digitvision
 * @package   Shopware\Plugins\DvsnProductOption
 * @copyright (c) 2020 digitvision
 */

namespace Dvsn\ProductOption\Setup;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;

class Update
{
    /**
     * Main bootstrap object.
     *
     * @var Plugin
     */
    private $plugin;

    /**
     * ...
     *
     * @var InstallContext
     */
    private $context;

    /**
     * ...
     *
     * @var Connection
     */
    private $connection;

    /**
     * ...
     *
     * @var EntityRepositoryInterface
     */
    private $customFieldSetRepository;

    /**
     * ...
     *
     * @var EntityRepositoryInterface
     */
    private $customFieldRepository;

    /**
     * ...
     *
     * @param Plugin $plugin
     * @param InstallContext $context
     * @param Connection $connection
     * @param EntityRepositoryInterface $customFieldSetRepository
     * @param EntityRepositoryInterface $customFieldRepository
     */
    public function __construct(Plugin $plugin, InstallContext $context, Connection $connection, EntityRepositoryInterface $customFieldSetRepository, EntityRepositoryInterface $customFieldRepository)
    {
        // set params
        $this->plugin = $plugin;
        $this->context = $context;
        $this->connection = $connection;
        $this->customFieldSetRepository = $customFieldSetRepository;
        $this->customFieldRepository = $customFieldRepository;
    }

    /**
     * ...
     */
    public function install(): void
    {
        // call the update
        $this->update('0.0.0');
    }

    /**
     * ...
     *
     * @param string $preUpdateVersion
     */
    public function update($preUpdateVersion): void
    {
    }
}
